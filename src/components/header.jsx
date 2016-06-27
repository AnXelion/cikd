import React, { Component, PropTypes } from'react';
import { Link, IndexLink } from 'react-router';

import AccountsUIWrapper from '../ui/AccountsUIWrapper';

export default class Header extends Component {
  render() {
    return (
      <div className="ui menu">
        <div className="ui container">
          <IndexLink to="/" activeClassName="active" className="item">
            <i className="home icon"></i>
            Home
          </IndexLink>
          <Link to="/test" className="item">
            <i className="keyboard icon"></i>
            Test
          </Link>
          <Link to="/about" className="item">
            <i className="info circle icon"></i>
            About
          </Link>
          <Link to="/admin" className="item">
            <i className="settings icon"></i>
            Admin
          </Link>

          <div className="ui secondary right menu">
            <div className="item">
              <AccountsUIWrapper/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
