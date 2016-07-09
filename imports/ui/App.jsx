// main
import React, { Component, PropTypes } from 'react';
import ReactDOM                        from 'react-dom';
import {Meteor}                        from 'meteor/meteor';
import { createContainer }             from 'meteor/react-meteor-data';

// material-ui
import injectTapEventPlugin from 'react-tap-event-plugin';

import FontIcon     from 'material-ui/FontIcon';
import {Tabs, Tab}  from 'material-ui/Tabs';

// ?
injectTapEventPlugin();

//custom
import { Events } from '../api/Events.js';
import Event from './Event.jsx';
import {EventListContainer} from '/imports/containers/EventListContainer';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    handleSubmit(e) {
        e.preventDefault();

        const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

        Events.insert({
          text,
          createdAt: new Date(),
        });

        ReactDOM.findDOMNode(this.refs.textInput).value = '';
    }

    renderEvents() {
        return (this.props.events || []).map((event) => (
          <Event key={event._id} event={event} />
        ));
    }

    render() {
        return (
            <div><EventListContainer /></div>
        );
    }
}

// App.propTypes = {
//     events: PropTypes.array.isRequired
// };

export default App;