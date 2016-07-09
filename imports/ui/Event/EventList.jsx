import React from 'react';

// import {EventContainer} from '/imports/containers/EventContainer';
import EventBox from '/imports/ui/Event/EventBox';

const EventList = (props) =>
    <div>
        {(props.events || []).map((value, key) => {
            // return <EventContainer key={key} item={value} />;
            return <EventBox key={key} event={value} />;
        })}
    </div>;

export default EventList;