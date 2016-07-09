import React from 'react';

import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const EventSingle = (props) =>
    <div className="container">
        <Card>
        <CardHeader
            title={props.event.name}
            subtitle={props.event.date.toDateString()}
        />
        <CardText>
            {props.event.description}
        </CardText>
        <CardActions>
            <FlatButton label={`${props.event.counter} Join`} />
        </CardActions>
        </Card>

    </div>;

export default EventSingle;
