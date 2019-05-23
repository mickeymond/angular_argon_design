pragma solidity >=0.4.21 <0.6.0;

import './Event.sol';

contract EventCreator {
    address payable public productOwner;

    mapping(address => User) public users;

    address[] creatorRequests;

    struct User {
        string fullName;
        string email;
        string phoneNumber;
        bool isEventCreator;
        bool hasRequestedToBeCreator;
        bool hasAddedInfo;
    }

    Event[] events;

    event EventCreated(Event newEvent, string title);
    event EventDeleted(uint index);
    event InfoAdded(string fullName, string email, string phoneNumber);
    
    constructor() public {
        productOwner = msg.sender;
    }

    function addInfo(string memory _fullName, string memory _email, string memory _phoneNumber) public {
        users[msg.sender].fullName = _fullName;
        users[msg.sender].email = _email;
        users[msg.sender].phoneNumber = _phoneNumber;
        users[msg.sender].hasAddedInfo = true;
        emit InfoAdded(_fullName, _email, _phoneNumber);
    }
    
    function createEvent(string memory _title, string memory _description, string memory _photo, uint _startDate, uint _endDate) public payable {
        // require(users[msg.sender].isEventCreator, 'you need to be an even creator to take this action');
        require(msg.value == 1000000, 'you need to pay 1 ether to create an event');
        uint eventIndex = events.length;
        Event newEvent = new Event(eventIndex, msg.sender, _title, _description, _photo, _startDate, _endDate);
        events.push(newEvent);
        emit EventCreated(newEvent, _title);
    }

    function deleteEvent(uint _index) public {
        Event existingEvent = events[_index];
        existingEvent.destroy(msg.sender);
        delete events[_index];
        emit EventDeleted(_index);
    }

    function getEvents() public view returns(Event[] memory) {
        return events;
    }

    function requestToBeCreator() public {
        require(users[msg.sender].hasAddedInfo, 'you have to add info before requesting for creator role');
        require(!users[msg.sender].hasRequestedToBeCreator, 'you have already requested to be creator');
        users[msg.sender].hasRequestedToBeCreator = true;
        creatorRequests.push(msg.sender);
    }

    function makeUserEventCreator(address _address) public {
        require(msg.sender == productOwner, 'only product owner can make a user event creator');
        require(users[_address].hasRequestedToBeCreator, 'user has to request for creator access before');
        users[_address].isEventCreator = true;
    }

	function getCreatorRequests() public view returns(address[] memory) {
		return creatorRequests;
	}
}