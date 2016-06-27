import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

export default class Paragraph extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ui raised segment">
        <p>{this.props.text}</p>
      </div>
    );
  }
}
