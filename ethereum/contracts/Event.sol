pragma solidity ^0.4.17;


contract EventGenerator {
    address[] public deployedEvents;
    address public admin;

    function createEvent (
        uint price,
        uint capacity,
        string eventType,
        string date,
        string street,
        string city,
        string province
        ) public {
        address newEvent = new Event(price, capacity, eventType, date, msg.sender, street, city, province);
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
    string public eventType;
    string public street;
    string public city;
    string public province;
    string public lat;
    string public long;
    string public date;
    bool public canPurchase;
    uint public attendeeCount;
    mapping(address => uint) public ticketsOwned;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    function Event (
        uint _price,
        uint _capacity,
        string _eventType,
        string _date,
        address _manager,
        string _street,
        string _city,
        string _province)
        public {
            price = _price;
            capacity = _capacity;
            eventType = _eventType;
            date = _date;
            street = _street;
            city = _city;
            province = _province;
            manager = _manager;
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

    function getSummary () public view returns (
        uint,
        uint,
        string,
        string,
        string,
        string,
        string,
        address,
        bool,
        uint
        ) {
        return (
            price,
            capacity,
            eventType,
            date,
            street,
            city,
            province,
            manager,
            canPurchase,
            attendeeCount
            );
    }

    function closeEvent () public {
        canPurchase = false;
        address thisContract = this;
        manager.transfer(thisContract.balance);
    }
}
