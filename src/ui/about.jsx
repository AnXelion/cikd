import React, { Component, PropTypes } from 'react';

import Header from '../components/header';

export default class About extends Component {
  render() {
    return (
      <div>
        <Header />
        {/*<h2 className="ui center aligned icon header">
          <i className="circular lab icon"></i>
          <h3 className="ui header">Objective</h3>
          <h4 className="ui header">
          <p>The aim of this project is to authenticate users via Chinese typing patterns in Zhuyin IME.</p>
          <p>In order to do analysis, we designed this website to collect users' typing patterns as our experiment data.</p>
          </h4>
          </h2>

        <div className="ui divider"></div>*/}

        <h2 className="ui center aligned icon header">
          <i className="circular mail icon"></i>
        </h2>
        <h3 className="ui header">Contact</h3>
        <h4 className="ui header">
          <p>NTU E-learning Lab</p>
          <p>Barry Lam Hall 515</p>
        </h4>
      </div>
    );
  }
}
