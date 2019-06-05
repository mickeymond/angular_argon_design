const EventCreator = artifacts.require("EventCreator");
const Event = artifacts.require("Event");
const EventCategory = artifacts.require("EventCategory");

contract('EventCategory', async accounts => {
	// console.log(accounts);
	it('Should initialize Event Category the right data', async () => {
		const title = 'Event of the year is here';
		const description = 'Everyone will love this one';
		const photo = 'https://ipfs.infura.io/ipfs/ImageHash';
		const startDate = Math.round(new Date('July 04, 2019').getTime() / 1000);
		const endDate = Math.round(new Date('August 04, 2019').getTime() / 1000);

		const eventCreatorInstance = await EventCreator.deployed();
		await eventCreatorInstance.createEvent(title, description, photo, startDate, endDate, {
			from: accounts[1], value: 1000000
		});
		const events = await eventCreatorInstance.getEvents();
		// console.log(events);
		const eventInstance = await Event.at(events[0]);
		await eventInstance.addCategory('Amazing category for an Event', 'Everyone will love this', { from: accounts[1] });
		const categories = await eventInstance.getCategories();
		// console.log(categories);
		const categoryInstance = await EventCategory.at(categories[0]);
		// console.log(categoryInstance);
		const creator = await categoryInstance.creator();
		// console.log(creator);
		assert.equal(creator, accounts[1]);
	});

	it('Should update Event Category', async () => {
		const eventCreatorInstance = await EventCreator.deployed();
		const events = await eventCreatorInstance.getEvents();
		const eventInstance = await Event.at(events[0]);
		const categories = await eventInstance.getCategories();
		// console.log(categories);
		const categoryInstance = await EventCategory.at(categories[0]);
		const receipt = await categoryInstance.update('Category title changed', 'Description also changed', {
			from: accounts[1]
		});
		// console.log(receipt);
		const title = await categoryInstance.title();
		// console.log(title);

		assert.equal(title, 'Category title changed')
		assert.equal(receipt.logs[0].event, 'CategoryUpdated');
	});

	it('Should add candidate to Event Category', async () => {
		const eventCreatorInstance = await EventCreator.deployed();
		const events = await eventCreatorInstance.getEvents();
		const eventInstance = await Event.at(events[0]);
		const categories = await eventInstance.getCategories();
		const categoryInstance = await EventCategory.at(categories[0]);

		await categoryInstance.addCandidate('John Diggles', 'https://johndiggles.com', 'Good guy', {
			from: accounts[1]
		});
		await categoryInstance.addCandidate('Mark Twayne', 'https://marktwayne.com', 'Good guy', {
			from: accounts[1]
		});
		const receipt = await categoryInstance.addCandidate('Oliver Queen', 'https://oliverqueen.com', 'Good guy', {
			from: accounts[1]
		});
		// console.log(receipt);
		let candidatesCount = await categoryInstance.candidatesCount();
		const candidate = await categoryInstance.candidates(candidatesCount);
		// console.log(candidatesCount);
		assert.equal(candidatesCount.toNumber(), 3);
		assert.equal(candidate.name, 'Oliver Queen');
		assert.equal(candidate.photo, 'https://oliverqueen.com');
		assert.equal(receipt.logs.length, 1);
		assert.equal(receipt.logs[0].event, 'CandidateAdded');
	});

	it('Should update candidate in Event Category', async () => {
		const eventCreatorInstance = await EventCreator.deployed();
		const events = await eventCreatorInstance.getEvents();
		// console.log(events);
		const eventInstance = await Event.at(events[0]);
		const categories = await eventInstance.getCategories();
		// console.log(categories);
		const categoryInstance = await EventCategory.at(categories[0]);
		let candidatesCount = await categoryInstance.candidatesCount();
		// console.log(candidatesCount.toNumber());
		let candidate = await categoryInstance.candidates(candidatesCount);
		// console.log(candidate);
		const receipt = categoryInstance.updateCandidate(candidatesCount, 'Barry Allen', 'https://barryallen.com', 'Bad guy', {
			from: accounts[1]
		});
		const updatedCandidate = await categoryInstance.candidates(candidatesCount);
		// console.log(updatedCandidate);
		assert.equal(updatedCandidate.name, 'Barry Allen');
		assert.equal(updatedCandidate.photo, 'https://barryallen.com');
	});

	it('Should delete candidate from Event Category', async () => {
		const eventCreatorInstance = await EventCreator.deployed();
		const events = await eventCreatorInstance.getEvents();
		const eventInstance = await Event.at(events[0]);
		const categories = await eventInstance.getCategories();
		const categoryInstance = await EventCategory.at(categories[0]);

		let candidatesCount = await categoryInstance.candidatesCount();
		// console.log(candidatesCount.toNumber());
		const receipt = await categoryInstance.deleteCandidate(1, { from: accounts[1] });
		// console.log(receipt);
		const candidate = await categoryInstance.candidates(1);
		candidatesCount = await categoryInstance.candidatesCount();
		// console.log(candidate.name);
		assert.equal(candidatesCount.toNumber(), 3);
		assert.equal(candidate.deleted, true);
		assert.equal(receipt.logs.length, 1);
		assert.equal(receipt.logs[0].event, 'CandidateDeleted');
	});

	it('Should cast vote for Candidate', async () => {
		const eventCreatorInstance = await EventCreator.deployed();
		const events = await eventCreatorInstance.getEvents();
		const eventInstance = await Event.at(events[0]);
		const categories = await eventInstance.getCategories();
		const categoryInstance = await EventCategory.at(categories[0]);

		await categoryInstance.addCandidate('Abraham Lincoln', 'https://myphoto.com', 'Good guy', {
			from: accounts[1]
		});

		// For Voting to work I have to update the Event start and end date
		const title = 'Event of the year is here';
		const description = 'Everyone will love this one';
		const photo = 'https://ipfs.infura.io/ipfs/ImageHash';
		const startDate = Math.round(new Date('April 04, 2019').getTime() / 1000);
		const endDate = Math.round(new Date('July 04, 2019').getTime() / 1000);

		await eventInstance.update(title, description, photo, startDate, endDate, { from: accounts[1] });

		try {
			let candidatesCount = await categoryInstance.candidatesCount();
			// console.log(candidatesCount.toNumber());

			let receipt = await categoryInstance.castVote(candidatesCount, { from: accounts[2], value: 1000000 });
			// console.log(receipt.logs[0].args.timestamp.toNumber());
			const candidate = await categoryInstance.candidates(candidatesCount);
			// console.log(candidate.numberOfVotes.toNumber());

			assert.equal(candidate.numberOfVotes.toNumber(), 1);
			assert.equal(receipt.logs.length, 1);
			assert.equal(receipt.logs[0].event, 'VoteCasted');
		} catch (error) {
			console.log(error.reason);
		}
	});

	it('Should fetch all candidates in Event Category', async () => {
		const eventCreatorInstance = await EventCreator.deployed();
		const events = await eventCreatorInstance.getEvents();
		const eventInstance = await Event.at(events[0]);
		const categories = await eventInstance.getCategories();
		const categoryInstance = await EventCategory.at(categories[0]);

		// Perform operations
		let candidates = [];
		let candidatesCount = await categoryInstance.candidatesCount();

		for (let i = 1; i <= candidatesCount.toNumber(); i++) {
			const candidate = await categoryInstance.candidates(i);
			candidates.push(candidate);
		}

		// console.log(candidates);
		assert.equal(candidates.length, 4);
	});
});
