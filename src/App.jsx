import React,  { Component, PropTypes }  from 'react';
import ReactDOM from 'react-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
