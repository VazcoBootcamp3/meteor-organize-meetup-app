import React, {PropTypes} from 'react';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


const EventBox = (props) =>
	<Card>
		<CardHeader
			title={props.event.name}
			subtitle={props.event.date.toDateString()}
		/>
	</Card>;


export default EventBox;