import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import Header from '../components/header';

export default class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    };

    this.setState = this.setState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDiscard = this.handleDiscard.bind(this);
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  handleSubmit(event) {

    Meteor.call('articles.insert', this.state.inputValue, function(error, result) {
      console.log(error);
      console.log(result);
    });

    this.setState({
      inputValue: ''
    });
  }

  handleDiscard(event) {
    this.setState({
      inputValue: ''
    });
  }

  render() {
    if (Meteor.userId() && Meteor.user() !== undefined && Meteor.user().profile.role === 'admin') {
      return (
        <div>
          <Header />
          <div className="ui container">
            <h4 className="ui top attached header">
              Add an article
            </h4>
            <div className="ui attached segment">
              <div className="ui form">
                <div className="ui field">
                  <textarea
                    value={this.state.inputValue}
                    onChange={this.handleChange}>
                  </textarea>
                </div>

                <button className={this.state.inputValue != '' ? "ui primary submit button" : "ui primary disabled submit button" } onClick={this.handleSubmit}>
                  Submit
                </button>
                <button className="ui button" onClick={this.handleDiscard}>
                  Discard
                </button>

              </div>
            </div>
          </div>
        </div>
      )
    }

    else {
      return (
        <div>
          <Header />
          <div className="ui container">
            <div className="ui error message">
              <div className="ui header">
                You are not an admin!
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}
