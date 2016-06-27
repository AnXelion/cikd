import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

export default class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    };

    this.setState = this.setState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  handleSubmit(event) {
    Meteor.call('articles.insert', this.state.inputValue);

    this.setState({inputValue: ''});
  }

  render() {
    if (Meteor.userId()) {
      if (Meteor.user() !== undefined && Meteor.user().profile.role === 'admin') {
        return (
          <div className="ui container">
            <div className="ui form">
              <div className="field">
                <label>Add Article</label>
                <textarea
                  value={this.state.inputValue}
                  onChange={this.handleChange}>
                </textarea>
              </div>
              <button className="ui primary right floated submit button" onClick={this.handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        )
      }
      else {
        return (
          <div>You are not a admin!</div>
        )
      }
    }
    else {
      return (
        <div>You are not a admin!</div>
      )
    }

  }
}
