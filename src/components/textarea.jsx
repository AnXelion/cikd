import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import { Inputs } from '../api/inputs';

export default class TextArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    };

    this.setState = this.setState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleChange(event) {
    this.setState({inputValue: event.target.value});
  }

  handleKeyPress(event) {
    Meteor.call('inputs.keyPress', event.key, this.props._id);
  }

  handleKeyUp(event) {
    Meteor.call('inputs.keyUp', event.key, this.props._id);
  }

  handleKeyDown(event) {
    Meteor.call('inputs.keyDown', event.key, this.props._id);
  }

  render() {
    return (
      <div className="ui form">
        <div className="field">
          <textarea
            value={this.state.inputValue}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            onKeyUp={this.handleKeyUp}
            onKeyDown={this.handleKeyDown}
          >
          </textarea>
        </div>
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('inputs');

  return {
    inputs: Inputs.find({}).fetch()
  }
}, TextArea);
