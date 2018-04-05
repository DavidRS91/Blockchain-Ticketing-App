pragma solidity ^0.4.17;


contract EventGenerator {
    address[] public deployedEvents;
    address public admin;

    function createEvent (
        uint price,
        uint capacity,
        string desc,
        string date,
        string street,
        string city,
        string title
        ) public {
        address newEvent = new Event(price, capacity, desc, date, msg.sender, street, city, title);
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
    string public street;
    string public city;
    string public title;
    string public date;
    string public desc;
    uint public attendeeCount;
    mapping(address => uint) public ticketsOwned;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    function Event (
        uint _price,
        uint _capacity,
        string _desc,
        string _date,
        address _manager,
        string _street,
        string _city,
        string _title)
        public {
            price = _price;
            capacity = _capacity;
            date = _date;
            street = _street;
            city = _city;
            title = _title;
            manager = _manager;
            attendeeCount = 0;
            desc = _desc;
        }

    function purchaseTicket (uint quantity) public payable {
        require(msg.value == price * quantity);
        require(capacity >= attendeeCount + quantity);
        ticketsOwned[msg.sender] = ticketsOwned[msg.sender] + quantity;
        attendeeCount += quantity;
    }

    function issueTicket (uint quantity, address recipient) public payable restricted {
        require(capacity >= attendeeCount + quantity);
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
        uint
        ) {
        return (price, capacity, desc, date, street, city, title, manager, attendeeCount);
    }
}
