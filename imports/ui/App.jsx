// main
import React, { Component, PropTypes } from 'react';
import ReactDOM                        from 'react-dom';
import {Meteor}                        from 'meteor/meteor';
import { createContainer }             from 'meteor/react-meteor-data';

// material-ui
import injectTapEventPlugin from 'react-tap-event-plugin';

import FontIcon     from 'material-ui/FontIcon';
import {Tabs, Tab}  from 'material-ui/Tabs';

//custom
import { Events } from '../api/Events.js';
import {EventListContainer} from '/imports/containers/EventListContainer';

class App extends Component {
    render() {
        return (
            <Tabs>
              <Tab icon={<FontIcon className="material-icons">ic_assignment</FontIcon>}
                   label="EVENTS LIST">
                   <EventListContainer />
              </Tab>
            </Tabs>
        );
    }
}

export default App;

