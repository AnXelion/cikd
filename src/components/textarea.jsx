import React, { Component, PropTypes } from 'react';
// import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import { Inputs } from '../api/inputs';

export default class TextArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      submitted: false,
      savedTypingPatterns: []
    };

    this.setState = this.setState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleCompositionStart = this.handleCompositionStart.bind(this);
    this.handleCompositionEnd = this.handleCompositionEnd.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRestart = this.handleRestart.bind(this);
  }

  handleChange(event) {
    this.setState({inputValue: event.target.value});
  }

  handleKeyPress(event) {
    // Meteor.call('inputs.keyPress', event.key, this.props._id, BrowserDetect.OS);
    var newSavedTypingPatterns = this.state.savedTypingPatterns.slice();
    newSavedTypingPatterns.push({
      key: event.key,
      eventType: 'keyPress',
      owner: Meteor.userId(),
      articleId: this.props._id,
      os: BrowserDetect.OS,
      createdAt: new Date()
    });

    this.setState({savedTypingPatterns: newSavedTypingPatterns});
  }

  handleKeyUp(event) {
    // Meteor.call('inputs.keyUp', event.key, this.props._id, BrowserDetect.OS);
    var newSavedTypingPatterns = this.state.savedTypingPatterns.slice();
    newSavedTypingPatterns.push({
      key: event.key,
      eventType: 'keyUp',
      owner: Meteor.userId(),
      articleId: this.props._id,
      os: BrowserDetect.OS,
      createdAt: new Date()
    });

    this.setState({savedTypingPatterns: newSavedTypingPatterns});
  }

  handleKeyDown(event) {
    // Meteor.call('inputs.keyDown', event.key, this.props._id, BrowserDetect.OS);
    var newSavedTypingPatterns = this.state.savedTypingPatterns.slice();
    newSavedTypingPatterns.push({
      key: event.key,
      eventType: 'keyDown',
      owner: Meteor.userId(),
      articleId: this.props._id,
      os: BrowserDetect.OS,
      createdAt: new Date()
    });

    this.setState({savedTypingPatterns: newSavedTypingPatterns});
  }

  handleInput(event) {
    // Meteor.call('inputs.input', event.target.value, this.props._id, BrowserDetect.OS);
    var newSavedTypingPatterns = this.state.savedTypingPatterns.slice();
    newSavedTypingPatterns.push({
      key: event.target.value,
      eventType: 'input',
      owner: Meteor.userId(),
      articleId: this.props._id,
      os: BrowserDetect.OS,
      createdAt: new Date()
    });
  }

  handleCompositionStart(event) {
    // Meteor.call('inputs.compositionStart', event.data, this.props._id, BrowserDetect.OS);
    var newSavedTypingPatterns = this.state.savedTypingPatterns.slice();
    newSavedTypingPatterns.push({
      key: event.data,
      eventType: 'compositionStart',
      owner: Meteor.userId(),
      articleId: this.props._id,
      os: BrowserDetect.OS,
      createdAt: new Date()
    });
  }

  handleCompositionEnd(event) {
    // Meteor.call('inputs.compositionEnd', event.data, this.props._id, BrowserDetect.OS);
    var newSavedTypingPatterns = this.state.savedTypingPatterns.slice();
    newSavedTypingPatterns.push({
      key: event.data,
      eventType: 'compositionEnd',
      owner: Meteor.userId(),
      articleId: this.props._id,
      os: BrowserDetect.OS,
      createdAt: new Date()
    });
  }

  handleSubmit() {
    // this.setState({submitting: true});
    //
    // Meteor.call('inputs.submit', this.state.savedTypingPatterns, function(error, result) {
    //   if (result == "success") {
    //     this.setState({
    //       submitting: false,
    //       submitted: true
    //     }).bind(this);
    //   }
    // });

    Meteor.call('inputs.submit', this.state.savedTypingPatterns);
    this.setState({submitted: true});

  }

  handleRestart() {
    this.setState({
      inputValue: '',
      submitted: false,
      savedTypingPatterns: []
    });
  }


  render() {
    return (
        <div className="ui form">
          <div className= {this.state.submitted == true ? "disabled field" : "field"} >
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
          <div className={(this.state.inputValue == '') || (this.state.submitted == true) ? "ui primary disabled button" : "ui primary button"} onClick={this.handleSubmit}>{(this.state.submitted == true) ? (<i className="fitted checkmark icon"></i>) : "Sumbit"}</div>
          <div className={this.state.submitted != true ? "ui button" : "ui disabled  button"} onClick={this.handleRestart}>Restart</div>
        </div>
    );
  }
}

// export default createContainer(() => {
//   // Meteor.subscribe('inputs');
//
//   return {
//     // inputs: Inputs.find({}).fetch()
//   }
// }, TextArea);
