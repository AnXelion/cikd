import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

export default class Paragraph extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="ui raised segment">
          <p><pre>{this.props.text}</pre></p>
          {/* <p>
            {this.props.text.split("\n").map(function(item) {
            return (
            <span>
            {item}
            <br/>
            </span>
            )
            })}
          </p> */}
        </div>
        );
  }
}
