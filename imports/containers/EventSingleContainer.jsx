import {composeWithTracker} from 'react-komposer';

import EventSingle from '/imports/ui/Event/EventSingle';

import {Events} from '/imports/api/Events.js';

const composer = (props, onData) => {
    if(Meteor.subscribe('event', props.eventId).ready()) {
        const event = Events.findOne({_id: props.eventId});
        onData(null, {
            event,
            onClick () {
                event.counter += 1;
            }
        });
    }
};

export const EventSingleContainer = composeWithTracker(composer)(EventSingle);
