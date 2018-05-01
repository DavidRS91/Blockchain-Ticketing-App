const metamaskDescription = (
  <div>
    <p>
      Metamask is a google chrome extension that connects you to the blockchain
      and gives you a digital wallet to store Ether (a cryptocurrency). Learn
      more{" "}
      <strong>
        <a
          target="_blank"
          style={{
            color: "#0c8346"
          }}
          href="https://www.youtube.com/embed/6Gf_kRE4MJU?ecver=2"
        >
          here
        </a>
      </strong>
      .
    </p>
  </div>
);

const installDescription = (
  <p>
    Installing Metamask is free and easy,{" "}
    <a
      href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
      target="_blank"
      style={{
        color: "#0c8346"
      }}
    >
      <strong>click here to get Metamask</strong>
    </a>{" "}
    from the Google Chrome Web Store.
  </p>
);

const rinkebyDescription = (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <p>
      First open metamask by clicking its logo in the top right of your browser
      (circled in red below). Next click on the network in the top left (see
      below), and select Rinkeby Test Net from the dropdown.
    </p>
    <img
      src="/static/metamaskScreenshot.png"
      alt="my image"
      style={{
        alignSelf: "center",
        height: "200px",
        border: "thin solid #8fd5a6"
      }}
    />
  </div>
);

const getEtherDescription = (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <p>
      <strong>
        <a
          target="_blank"
          style={{
            color: "#0c8346"
          }}
          href="https://faucet.rinkeby.io/"
        >
          faucet.rinkeby.io
        </a>
      </strong>{" "}
      dispenses Ether on for use on the Rinkeby Test Network. It will require
      you to make a post on social media containing your wallet's address in
      order to receive Ether.
    </p>

    <p>
      Note: See the image below for reference on how to copy your wallet's
      address.
    </p>
    <img
      src="/static/copyWalletAddress.png"
      alt="my image"
      style={{
        alignSelf: "center",
        height: "200px",
        border: "thin solid #8fd5a6"
      }}
    />
  </div>
);

const lockedDescription = (
  <p>
    Metamask automatically locks your account after a certain period of time. To
    unlock simply click on the metaMask extension (to the right of the address
    bar in the browser) and type in your password.
  </p>
);

const signInDescription = (
  <div>
    <p>
      The first time you use Metamask, you will need to create a wallet (like an
      account). Click on the extension (the fox icon to the right of the address
      bar in the browser) and follow the instructions to create an account.
    </p>
    <p>
      <strong>Note: </strong> When creating an account, you will be given a list
      of seed words. Make sure to remember these in case you need to sign back
      in to your account.
    </p>
  </div>
);

const metaMaskModal = (
  <div>
    {" "}
    <p style={{ color: "#329f5b" }}>
      Metamask is a google chrome extension that enables users to interact with
      the Ethereum blockchain and provides them with a digital wallet for making
      transactions on the blockchain.
    </p>
    <p style={{ color: "#329f5b" }}>
      Users of Baldy need to install Metamask in order to purchase tickets, as
      your Metamask wallet address will serve as proof of ownership for tickets
      you have purchased, and Metamask will give you access to the events stored
      on the blockchain.
    </p>
    <br />
  </div>
);

export {
  metaMaskModal,
  signInDescription,
  lockedDescription,
  getEtherDescription,
  rinkebyDescription,
  installDescription,
  metamaskDescription
};
