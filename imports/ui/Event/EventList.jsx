import React from 'react';

// import {EventContainer} from '/imports/containers/EventContainer';
import EventBox from '/imports/ui/Event/EventBox';
import EventNewButton from '/imports/ui/Event/EventNewButton';

const EventList = (props) =>
    <div>
        {(props.events || []).map((value, key) => {
            // return <EventContainer key={key} item={value} />;
            return <EventBox key={key} event={value} />;
        })}
        <EventNewButton />
    </div>;

export default EventList;