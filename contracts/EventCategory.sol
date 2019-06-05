pragma solidity >=0.4.21 <0.6.0;

import './Event.sol';

contract EventCategory {
    uint public index;
    address public creator;
    string public title;
    string public description;

    mapping (uint => Candidate) public candidates;
    mapping (address => uint) public voters;
    struct Candidate {
        uint id;
        string name;
        string photo;
        string description;
        uint numberOfVotes;
        bool deleted;
    }

    Event parent;

    uint public candidatesCount;
    uint public votersCount;

    event CategoryUpdated(string title, string description);
    event CandidateAdded(uint id, string name);
    event CandidateDeleted(uint id);
    event VoteCasted(address voter, uint timestamp);

    modifier isBeforeStart() {
        require(now < parent.startDate(), 'You can not perform this operation since event has began');
        _;
    }

    modifier isInTime() {
        require(now >= parent.startDate() && now <= parent.endDate(), 'You can not perform this operation since event has either not began or has already ended');
        _;
    }

    constructor(uint _index, address _creator, string memory _title, string memory _description) public {
        index = _index;
        creator = _creator;
        title = _title;
        description = _description;
        parent = Event(msg.sender);
    }

    function update(string memory _title, string memory _description) public isBeforeStart {
        require(msg.sender == creator, 'only creator can update category');
        title = _title;
        description = _description;
        emit CategoryUpdated(_title, _description);
    }

    function destroy() external isBeforeStart {
        selfdestruct(address(uint160(creator)));
    }

    function addCandidate(string memory _name, string memory _photo, string memory _description) public isBeforeStart {
        require(msg.sender == creator, 'only creator can add candidate');
        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, _photo, _description, 0, false);
        emit CandidateAdded(candidatesCount, _name);
    }

    function deleteCandidate(uint _index) public isBeforeStart {
        require(msg.sender == creator, 'only creator can delete candidate');
        candidates[_index].deleted = true;
        emit CandidateDeleted(_index);
    }

    function updateCandidate(uint _index, string memory _name, string memory _photo, string memory _description) public isBeforeStart {
        require(msg.sender == creator, 'only creator can update candidate');
        candidates[_index].name = _name;
        candidates[_index].photo = _photo;
        candidates[_index].description = _description;
    }

    function castVote(uint _candidateId) public isInTime payable {
        require(msg.value == 1000000, 'ether is required to cast vote');
        votersCount++;
        candidates[_candidateId].numberOfVotes++;
        voters[msg.sender]++;
        emit VoteCasted(msg.sender, now);
    }
}
