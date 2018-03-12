process.setMaxListeners(50);
const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());
const { INFURA_KEY } = require("../config");

const compiledGenerator = require("../ethereum/build/EventGenerator.json");
const compiledEvent = require("../ethereum/build/Event.json");

let accounts;
let generator;
let eventAddress;
let event;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  generator = await new web3.eth.Contract(
    JSON.parse(compiledGenerator.interface)
  )
    .deploy({ data: compiledGenerator.bytecode })
    .send({ from: accounts[0], gas: "1000000" });

  await generator.methods.createEvent("100", "100").send({
    from: accounts[0],
    gas: "1000000"
  });
  [eventAddress] = await generator.methods.getDeployedEvents().call(); //take first element from returned array and assign it to eventAddress variable
  event = await new web3.eth.Contract(
    JSON.parse(compiledEvent.interface),
    eventAddress
  );
});

describe("Events", () => {
  it("deploys generator and event", () => {
    console.log(INFURA_KEY);
    assert.ok(generator.options.address);
    assert.ok(event.options.address);
  });

  it("marks caller as the event manager", async () => {
    const manager = await event.methods.manager().call();
    assert.equal(accounts[0], manager);
  });

  it("allows user to purchase a ticket", async () => {
    await event.methods.purchaseTicket("1").send({
      from: accounts[2],
      value: "100",
      gas: "1000000"
    });
    const ticketsOwned = await event.methods
      .verifyOwnership(accounts[2])
      .call();
    assert.equal(1, ticketsOwned);
  });

  it("allows user to purchase multiple tickets", async () => {
    await event.methods.purchaseTicket("4").send({
      from: accounts[4],
      value: `${4 * 100}`,
      gas: "1000000"
    });
    const ticketsOwned = await event.methods
      .verifyOwnership(accounts[4])
      .call();
    assert.equal(4, ticketsOwned);
  });

  it("rejects a user who pays too much", async () => {
    try {
      await event.methods.purchaseTicket("1").send({
        from: accounts[4],
        value: "101",
        gas: "1000000"
      });
    } catch (err) {
      assert(err);
    }
  });

  it("rejects a user who pays too little", async () => {
    try {
      await event.methods.purchaseTicket("1").send({
        from: accounts[4],
        value: "99",
        gas: "1000000"
      });
    } catch (err) {
      assert(err);
    }
  });

  it("allows events to be closed and distributes balance to manager", async () => {
    await event.methods.purchaseTicket("100").send({
      from: accounts[2],
      value: "10000",
      gas: "1000000"
    });
    const balanceBefore = await web3.eth.getBalance(accounts[0]);
    await event.methods.closeEvent().send({
      from: accounts[1],
      gas: "1000000"
    });
    const balanceAfter = await web3.eth.getBalance(accounts[0]);
    const open = await event.methods.canPurchase().call();
    assert(balanceBefore < balanceAfter);
    assert(!open);
  });

  it("prohibits sale of tickets once at capacity", async () => {
    await event.methods.purchaseTicket("100").send({
      from: accounts[4],
      value: `${100 * 100}`,
      gas: "1000000"
    });
    try {
      await event.methods.purchaseTicket("1").send({
        from: accounts[1],
        value: "100",
        gas: "1000000"
      });
    } catch (err) {
      assert(err);
    }
  });

  it("prohibits sale of tickets to closed events", async () => {
    await event.methods.closeEvent().send({
      from: accounts[0],
      gas: "1000000"
    });
    try {
      await event.methods.purchaseTicket("1").send({
        from: accounts[1],
        value: "100",
        gas: "1000000"
      });
    } catch (err) {
      assert(err);
    }
  });
});

// stop purchase of tickets when sold out
