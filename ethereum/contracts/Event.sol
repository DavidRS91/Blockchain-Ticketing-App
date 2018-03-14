pragma solidity ^0.4.17;


contract EventGenerator {
    address[] public deployedEvents;
    address public admin;

    function createEvent (uint price, uint capacity) public {
        address newEvent = new Event(price, capacity, msg.sender);
        deployedEvents.push(newEvent);
    }

    function getDeployedEvents () public view returns (address[]) {
        return deployedEvents;
    }
}


contract Event {
    uint public price;
    uint public capacity;
    address public manager;
    bool public canPurchase;
    uint public attendeeCount;
    mapping(address => uint) public ticketsOwned;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    function Event (uint admissionPrice, uint audienceCapacity, address creator) public {
        price = admissionPrice;
        capacity = audienceCapacity;
        manager = creator;
        canPurchase = true;
        attendeeCount = 0;
    }

    function purchaseTicket (uint quantity) public payable {
        require(msg.value == price * quantity);
        require(capacity >= attendeeCount + quantity);
        require(canPurchase);
        ticketsOwned[msg.sender] = ticketsOwned[msg.sender] + quantity;
        attendeeCount += quantity;
    }

    function issueTicket (uint quantity, address recipient) public payable restricted {
        require(capacity >= attendeeCount + quantity);
        require(canPurchase);
        ticketsOwned[recipient] = ticketsOwned[recipient] + quantity;
        attendeeCount += quantity;
    }

    function verifyOwnership (address attendee) public view returns (uint) {
        return ticketsOwned[attendee];
    }

    function getSummary () public view returns (uint, uint, address, bool, uint) {
        return (
            price, capacity, manager, canPurchase, attendeeCount
            );
    }

    function closeEvent () public {
        canPurchase = false;
        address thisContract = this;
        manager.transfer(thisContract.balance);
    }

}



/* pragma solidity ^0.4.17;


contract EventGenerator {
    address[] public deployedEvents;
    address public admin;

    function createEvent (uint price, uint capacity) public {
        address newEvent = new Event(price, capacity, msg.sender);
        deployedEvents.push(newEvent);
    }

    function getDeployedEvents () public view returns (address[]) {
        return deployedEvents;
    }
}


contract Event {
    uint public price;
    uint public capacity;
    address public manager;
    bool public canPurchase;
    uint public attendeeCount;
    mapping(address => uint) public ticketsOwned;

    function Event (uint admissionPrice, uint audienceCapacity, address creator) public {
        price = admissionPrice;
        capacity = audienceCapacity;
        manager = creator;
        canPurchase = true;
        attendeeCount = 0;
    }

    function purchaseTicket (uint quantity) public payable {
        require(msg.value == price * quantity);
        ticketsOwned[msg.sender] = ticketsOwned[msg.sender] + quantity;
        attendeeCount += quantity;
    }

    function issueTicket (uint quantity) public payable {
        ticketsOwned[msg.sender] = ticketsOwned[msg.sender] + quantity;
        attendeeCount += quantity;
    }

    function verifyOwnership (address attendee) public view returns (uint) {
        return ticketsOwned[attendee];
    }

    function closeEvent () public {
        canPurchase = false;
        address thisContract = this;
        manager.transfer(thisContract.balance);
    }

} */
