import {composeWithTracker} from 'react-komposer';

import EventList from '/imports/ui/Event/EventList';

import {Events} from '/imports/api/Events.js';


const composer = (props, onData) => {
	if(Meteor.subscribe('events').ready()) {
		const events = Events.find({}, { sort: { createdAt: -1 } }).fetch();
		onData(null, {events});
	}
};

export const EventListContainer = composeWithTracker(composer)(EventList);