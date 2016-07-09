import {Meteor} from "meteor/meteor";
import React from 'react';
import {render} from 'react-dom';

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import App from '/imports/ui/App.jsx';


const RenderApp = () => (
	<MuiThemeProvider muiTheme={getMuiTheme()}>
		<App />
	</MuiThemeProvider>
);


Meteor.startup(() => {
	render(
	  <RenderApp />,
	  document.getElementById('app')
	);
});