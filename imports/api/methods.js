import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {Events}		from '/imports/api/Events.js';

Meteor.methods({
	'events.add'(event) {
		check(event, Object);

		Events.insert(
			{
				name: event.name,
				description: event.description,
				date: event.date,
				createdAt: new Date(),
				counter: 0,
			});
	},
});