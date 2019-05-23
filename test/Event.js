const EventCreator = artifacts.require("EventCreator");
const Event = artifacts.require("Event");
const EventCategory = artifacts.require("EventCategory");

contract('Event', async accounts => {
	// console.log(accounts);
	it('Should initialize Event to right values', async () => {
		const title = 'Event of the year is here';
		const description = 'Everyone will love this one';
		const photo = 'https://ipfs.infura.io/ipfs/ImageHash';
		const startDate = Math.round(new Date('June 04, 2019').getTime() / 1000);
		const endDate = Math.round(new Date('July 04, 2019').getTime() / 1000);

		const eventCreatorInstance = await EventCreator.deployed();
		await eventCreatorInstance.createEvent(title, description, photo, startDate, endDate, {
			from: accounts[1], value: 1000000
		});
		const events = await eventCreatorInstance.getEvents();
		// console.log(events);
		const eventInstance = await Event.at(events[0]);
		// console.log(eventInstance);
		const eventCreator = await eventInstance.creator();
		const eventTitle = await eventInstance.title();
		const eventDescription = await eventInstance.description();
		const eventStartDate = await eventInstance.startDate();
		const eventEndDate = await eventInstance.endDate();

		assert.equal(eventCreator, accounts[1]);
		assert.equal(eventTitle, title);
		assert.equal(eventDescription, description);
		assert.equal(eventStartDate, startDate);
		assert.equal(eventEndDate, endDate);
	});

	it('Should update Event', async () => {
		const eventCreatorInstance = await EventCreator.deployed();
		const events = await eventCreatorInstance.getEvents();
		// console.log(events);
		const eventInstance = await Event.at(events[0]);
		// console.log(eventInstance);
		const title = 'Event title has change';
		const description = 'Event description has change';
		const photo = 'https://ipfs.infura.io/ipfs/ImageHashChanged';
		const startDate = Math.round(new Date('June 04, 2019').getTime() / 1000);
		const endDate = Math.round(new Date('July 04, 2019').getTime() / 1000);

		const receipt = await eventInstance.update(title, description, photo, startDate, endDate, { from: accounts[1] });
		// console.log(receipt);
		const eventTitle = await eventInstance.title();
		const eventDescription = await eventInstance.description();
		const eventStartDate = await eventInstance.startDate();
		const eventEndDate = await eventInstance.endDate();

		assert.equal(eventTitle, title);
		assert.equal(eventDescription, description);
		assert.equal(eventStartDate, startDate);
		assert.equal(eventEndDate, endDate);
	});

	it('Should add category to Event', async () => {
		const eventCreatorInstance = await EventCreator.deployed();
		const events = await eventCreatorInstance.getEvents();
		// console.log(events);
		const eventInstance = await Event.at(events[0]);

		const title = 'Amazing category for an Event';
		const description = 'Everyone will love this';
		const receipt = await eventInstance.addCategory(title, description, { from: accounts[1] });
		// console.log(receipt);
		const categories = await eventInstance.getCategories();
		// console.log(categories);

		assert.equal(categories.length, 1);
		assert.equal(receipt.logs.length, 1);
		assert.equal(receipt.logs[0].event, 'EventCategoryAdded');
	});

	it('Should update Event Category', async () => {
		const eventCreatorInstance = await EventCreator.deployed();
		const events = await eventCreatorInstance.getEvents();
		const eventInstance = await Event.at(events[0]);
		const categories = await eventInstance.getCategories();
		// console.log(categories);
		const categoryInstance = await EventCategory.at(categories[0]);
		const receipt = await eventInstance.updateCategory(0, 'Category title changed', 'Description also changed', {
			from: accounts[1]
		});
		// console.log(receipt);
		const title = await categoryInstance.title();
		// console.log(title);

		assert.equal(title, 'Category title changed')
		assert.equal(receipt.logs[0].event, 'CategoryUpdated');
	});

	it('Should delete category from Event', async () => {
		const eventCreatorInstance = await EventCreator.deployed();
		const events = await eventCreatorInstance.getEvents();
		// console.log(events);
		const eventInstance = await Event.at(events[0]);
		let categories = await eventInstance.getCategories();
		// console.log(categories);
		const receipt = await eventInstance.deleteCategory(0, { from: accounts[1] });
		// console.log(receipt);
		categories = await eventInstance.getCategories();
		const liveCategories = categories.filter(category => category !== '0x0000000000000000000000000000000000000000');
		// console.log(categories);
		// console.log(liveCategories);

		assert.equal(receipt.logs[0].event, 'EventCategoryDeleted');
	});
});
