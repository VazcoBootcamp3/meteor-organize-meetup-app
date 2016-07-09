import React from 'react';

import {EventSingleContainer} from '/imports/containers/EventSingleContainer';

const EventSingle = (props) =>
    <div>
        <EventSingleContainer eventId={props.eventId} />
    </div>;

export default EventSingle;
