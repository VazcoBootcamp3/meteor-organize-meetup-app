import React from 'react';

import {EventBoxContainer} from '/imports/containers/EventBoxContainer';
import EventNewButton from '/imports/ui/Event/EventNewButton';

const EventList = (props) =>
    <div>
        {(props.events || []).map((value, key) => {
            // return <EventContainer key={key} item={value} />;
            return <EventBoxContainer key={key} event={value} />;
        })}
        <EventNewButton />
    </div>;

export default EventList;
