import React, { Component, PropTypes } from 'react';

import { Events } from '../api/Events.js';

export default class Event extends Component {

    render() {
        return (
          <li>{this.props.event.text}</li>
        );
    }
}

Event.propTypes = {
    event: PropTypes.object.isRequired,
};
