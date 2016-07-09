// main
import React, {PropTypes} from 'react';
import {Meteor}           from 'meteor/meteor';

// material-ui
import injectTapEventPlugin from 'react-tap-event-plugin';

import FontIcon     from 'material-ui/FontIcon';
import {Tabs, Tab}  from 'material-ui/Tabs';

// ?
injectTapEventPlugin();

class App extends React.Component {
    render() {
      return(
        <Tabs>
          <Tab icon={<FontIcon className="material-icons">assignment</FontIcon>} 
               label="EVENTS LIST">
          </Tab>
        </Tabs>
      );
    }
}

export default App;