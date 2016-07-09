import React from 'react';

// material-ui
import Dialog from 'material-ui/Dialog';

import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import {red100, green100} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';


class EventDialog extends React.Component {

	_addEvent() {
		const {eventInput, dateInput, descriptionInput} = this.refs;

		if(!eventInput.getValue()) {
			alert("EventInput is empty.");
			return;
		}

		if(!dateInput.getDate()) {
			alert("DateInput is empty.");
			return;
		}

		if(!descriptionInput.getValue()) {
			alert("descriptionInput is empty.");
			return;
		}

		const event = {
			name: eventInput.getValue(),
			description: descriptionInput.getValue(),
			date: dateInput.getDate(),
		};

		Meteor.call('events.add', event, (err, result) => {
			if(err) 
				alert(err);
			
			else {
				alert('OK');
				this.props.handleClose();
			}
		});
	}

    render() {
	    const actions = [
		    <RaisedButton
			    backgroundColor={green100}
			    icon={<FontIcon className="material-icons">done</FontIcon>}
			    onTouchTap={this._addEvent.bind(this)}
			/>,
			<RaisedButton
			    backgroundColor={red100}
			    icon={<FontIcon className="material-icons">clear</FontIcon>}
			    onTouchTap={this.props.handleClose}
			/>
	    ];

        return(
            <div>
                <Dialog
                    title="Add new event"
                    actions={actions}
                    open={this.props.open}
                    onRequestClose={this.props.handleClose}
                    autoScrollBodyContent={true}
                >
	                <TextField
				        floatingLabelText="Event"
				        fullWidth={true}
				        ref="eventInput"
				    />
				    <TextField
				        floatingLabelText="Description"
				        multiLine={true}
				        rows={2}
				        fullWidth={true}
				        ref="descriptionInput"
				    />
				    <DatePicker
				        hintText="Date"
				        container="inline"
				        mode="landscape"
				        fullWidth={true}
				        ref="dateInput"
				    />
                </Dialog>
            </div>
        );
    }
}

export default EventDialog;