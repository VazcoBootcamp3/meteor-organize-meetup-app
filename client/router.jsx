import React from 'react';
import {mount} from 'react-mounter';

import {AppLayout} from '/client/main';
import App from '/imports/ui/App';
import EventSingle from '/imports/ui/EventSingle';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

FlowRouter.route('/', {
	name: 'App',
	action() {
		mount(AppLayout, {
			content: (<App />)
		});
	}
});

FlowRouter.route('/event/:_id', {
    name: 'Event',
    action(params) {
        mount(AppLayout, {
            content: (<EventSingle eventId={params._id}/>)
        });
    }
});
