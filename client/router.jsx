import React from 'react';
import {mount} from 'react-mounter';

import {AppLayout} from '/client/main';
import App from '/imports/ui/App';


FlowRouter.route('/', {
	name: 'App',
	action() {
		mount(AppLayout, {
			content: (<App />)
		});
	}
});
