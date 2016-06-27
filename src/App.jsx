import React,  { Component, PropTypes }  from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="ui container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
