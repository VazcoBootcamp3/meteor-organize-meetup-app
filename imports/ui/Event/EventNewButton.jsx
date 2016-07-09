import React from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import EventDialog from '/imports/ui/Event/EventDialog';


class EventNewButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
        };
    }

    _openDialog() {
        this.setState({open: true});
    };

    _closeDialog() {
        this.setState({open: false});
    };

	render() {
		return(
			<div>
			    <FloatingActionButton 
				    mini={true}
                    onTouchTap={this._openDialog.bind(this)}
				>
			      <ContentAdd />
			    </FloatingActionButton>

			    <EventDialog 
                    open={this.state.open}
                    handleClose={this._closeDialog.bind(this)}
                />
            </div>
	    );
	}
}

export default EventNewButton;