import {composeWithTracker} from 'react-komposer';

import EventBox from '/imports/ui/Event/EventBox';

const composer = (props, onData) => {
    onData(null, {
        onClick: () => FlowRouter.go('Event', {_id: props.event._id})
    });
};

export const EventBoxContainer = composeWithTracker(composer)(EventBox);
