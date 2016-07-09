import {Meteor} from 'meteor/meteor';
import {Events} from '/imports/api/Events.js';

Meteor.publish('events', () => {
	return Events.find({});
});

Meteor.publish('event', (_id) => {
    return Events.find({_id});
});
