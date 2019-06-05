const EventCreator = artifacts.require("EventCreator");

contract('EventCreator', async accounts => {
	// console.log(accounts);
	it('Should initialize Event Creator with correct values', async () => {
		const instance = await EventCreator.deployed();

		const productOwner = await instance.productOwner();
		// assertions
		assert.equal(productOwner, accounts[0]);
	});

	it('Should add user info', async () => {
		const instance = await EventCreator.deployed();

		const fullName = 'Michael Hammond';
		const email = 'mickeymond@gmail.com';
		const phoneNumber = '+233248470214';

		const receipt = await instance.addInfo(fullName, email, phoneNumber, {
			from: accounts[1]
		});
		// console.log(receipt)
		const user = await instance.users(accounts[1]);
		// console.log(user);
		assert.equal(user.fullName, fullName);
		assert.equal(user.email, email);
		assert.equal(user.phoneNumber, phoneNumber);
		assert.equal(user.hasAddedInfo, true);
	});

	it('Should create a new Event', async () => {
		const instance = await EventCreator.deployed();
		const title = 'Event of the year is here';
		const description = 'Everyone will love this one';
		const photo = 'https://ipfs.infura.io/ipfs/ImageHash';
		const startDate = Math.round(new Date('July 04, 2019').getTime() / 1000);
		const endDate = Math.round(new Date('August 04, 2019').getTime() / 1000);

		await instance.createEvent(title, description, photo, startDate, endDate, {
			from: accounts[1], value: 1000000
		});
		const receipt = await instance.createEvent(title, description, photo, startDate, endDate, {
			from: accounts[2], value: 1000000
		});
		// console.log(receipt.logs[0].args);
		await instance.createEvent(title, description, photo, startDate, endDate, {
			from: accounts[3], value: 1000000
		});
		const events = await instance.getEvents();
		// console.log(events);

		// assertions
		assert.equal(events.length, 3);
		assert.equal(receipt.logs.length, 1);
		assert.equal(receipt.logs[0].event, 'EventCreated');
	});

	it('Should Delete Event', async () => {
		const instance = await EventCreator.deployed();
		let events = await instance.getEvents();
		// console.log(events);
		const receipt = await instance.deleteEvent(1, { from: accounts[2] });
		// console.log(receipt);
		events = await instance.getEvents();
		const liveEvents = events.filter(event => event !== '0x0000000000000000000000000000000000000000');
		// console.log(events);
		// console.log(liveEvents);
		assert.equal(events.length, 3);
		assert.equal(liveEvents.length, 2);
	});

	it('Should request to be creator', async () => {
		const instance = await EventCreator.deployed();
		const receipt = await instance.requestToBeCreator({ from: accounts[1] });
		// console.log(receipt);
		const user = await instance.users(accounts[1]);
		// console.log(user);
		assert.equal(user.hasRequestedToBeCreator, true);
	});

	it('Should make user event creator', async () => {
		const instance = await EventCreator.deployed();
		const receipt = await instance.makeUserEventCreator(accounts[1]);
		// console.log(receipt);
		const user = await instance.users(accounts[1]);
		// console.log(user);
		assert.equal(user.isEventCreator, true);
	});

	it('Should get creator requests', async () => {
		const instance = await EventCreator.deployed();
		const receipt = await instance.getCreatorRequests();
		// console.log(receipt);
		assert.equal(receipt.length, 1);
	});
});
