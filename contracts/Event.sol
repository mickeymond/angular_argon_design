pragma solidity >=0.4.21 <0.6.0;

import './EventCategory.sol';

contract Event {
    address public creator;
    uint public index;
    string public title;
    string public description;
    string public photo;
    uint public startDate;
    uint public endDate;

    EventCategory[] categories;

    event EventUpdated(string title, string description, uint startDate, uint endDate);
    event EventCategoryAdded(string title, string description);
    event EventCategoryDeleted(uint id);

    modifier isBeforeStart() {
        require(now < startDate, 'You can not perform this operation since event has began');
        _;
    }
    
    constructor(uint _index, address _creator, string memory _title, string memory _description, string memory _photo, uint _startDate, uint _endDate
    ) public {
        index = _index;
        creator = _creator;
        title = _title;
        description = _description;
        startDate = _startDate;
        endDate = _endDate;
        photo = _photo;
    }

    function update(string memory _title, string memory _description, string memory _photo, uint _startDate, uint _endDate) public isBeforeStart {
        require(msg.sender == creator, 'only creator can update event');
        title = _title;
        description = _description;
        startDate = _startDate;
        endDate = _endDate;
        photo = _photo;
        emit EventUpdated(_title, _description, _startDate, _endDate);
    }

    // function updateCategory(uint _index, string memory _title, string memory _description) public {
    //     require(msg.sender == creator, 'only creator can update category');
    //     EventCategory category = categories[_index];
    //     category.update(msg.sender, _title, _description);
    //     emit CategoryUpdated(_title, _description);
    // }

    function destroy(address _destroyer) external isBeforeStart {
        require(_destroyer == creator, 'only creator can destroy event');
        selfdestruct(address(uint160(creator)));
    }

    function addCategory(string memory _title, string memory _description) public isBeforeStart {
        require(msg.sender == creator, 'only creator can add category');
        uint categoryIndex = categories.length;
        EventCategory newEventCategory = new EventCategory(categoryIndex, msg.sender, _title, _description);
        categories.push(newEventCategory);
        emit EventCategoryAdded(_title, _description);
    }

    function deleteCategory(uint _index) public isBeforeStart {
        require(msg.sender == creator, 'only creator can delete category');
        EventCategory category = categories[_index];
        category.destroy();
        delete categories[_index];
        emit EventCategoryDeleted(_index);
    }

    function getCategories() public view returns (EventCategory[] memory) {
        return categories;
    }
}
