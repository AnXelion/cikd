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
    this.handleInput = this.handleInput.bind(this);
    this.handleCompositionStart = this.handleCompositionStart.bind(this);
    this.handleCompositionEnd = this.handleCompositionEnd.bind(this);
  }

  handleChange(event) {
    // console.log("change: " + event.target.value);
    this.setState({inputValue: event.target.value});
  }

  handleKeyPress(event) {
    // console.log(event.key);
    Meteor.call('inputs.keyPress', event.key, this.props._id, BrowserDetect.OS);
  }

  handleKeyUp(event) {
    // console.log(event.key);
    Meteor.call('inputs.keyUp', event.key, this.props._id, BrowserDetect.OS);
  }

  handleKeyDown(event) {
    // console.log(event.key);
    Meteor.call('inputs.keyDown', event.key, this.props._id, BrowserDetect.OS);
  }

  handleInput(event) {
    // console.log("input: " + event.target.value);
    Meteor.call('inputs.input', event.target.value, this.props._id, BrowserDetect.OS);
  }

  handleCompositionStart(event) {
    // console.log(event.data);
    Meteor.call('inputs.compositionStart', event.data, this.props._id, BrowserDetect.OS);
  }

  handleCompositionEnd(event) {
    // console.log(event.data);
    Meteor.call('inputs.compositionEnd', event.data, this.props._id, BrowserDetect.OS);
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
            onInput={this.handleInput}
            onCompositionStart={this.handleCompositionStart}
            onCompositionEnd={this.handleCompositionEnd}
          >
          </textarea>
        </div>
      </div>
    );
  }
}

export default createContainer(() => {
  // Meteor.subscribe('inputs');

  return {
    inputs: Inputs.find({}).fetch()
  }
}, TextArea);
