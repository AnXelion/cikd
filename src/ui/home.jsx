import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import Header from '../components/header';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />

        <div className="ui hidden divider"></div>

        <div classNamew="ui vertical center aligned segment">
          <div className="ui text container">
            <h1 className="ui centered header">
              Welcome to Zhuyin typing patterns collecting site!
            </h1>
            <h3 className="ui centered header">
              Before you start taking a test, please read the following instrustions.
            </h3>
          </div>
        </div>

        <div className="ui hidden divider"></div>

        <div className="ui grid container">
          <div className="row">
            <div className="centered twelve wide column">
              <div className="ui horizontal divider header">
                <i className="idea icon"></i>
                Instructions
              </div>
            </div>
          </div>

          <div className="row">
            <div className="centered eight wide column">
              <h2 className="ui header">
                {/* <i className="violet desktop icon"></i> */}
                <i className="pink laptop icon"></i>
                <div className="content">
                  Desktop & laptop only
                  <div className="sub header">
                    Mobile environment is not our main focus now.
                  </div>
                </div>
              </h2>
            </div>
          </div>


          <div className="ui hidden divider"></div>

          <div className="row">
            <div className="centered eight wide column">
              <h2 className="ui header">
                <i className="yellow chrome icon"></i>
                <div className="content">
                  Use Chrome only
                  <div className="sub header">
                    Only Chrome can support every key event we need.
                  </div>
                </div>
              </h2>
            </div>
          </div>

          <div className="ui hidden divider"></div>

          <div className="row">
            <div className="centered eight wide column">
              <h2 className="ui header">
                <i className="green keyboard icon"></i>
                <div className="content">
                  Zhuyin IME only
                  <div className="sub header">
                    Our experiment is based on Zhuyin IME patterns.
                  </div>
                </div>
              </h2>
            </div>
          </div>

          <div className="ui hidden divider"></div>

          <div className="row">
            <div className="centered eight wide column">
              <h2 className="ui header">
                <i className="blue facebook square icon"></i>
                <div className="content">
                  Log in with Facebook account
                  <div className="sub header">
                    Only use it to seperate your data from others' data.
                  </div>
                </div>
              </h2>
            </div>
          </div>

          <div className="ui hidden divider"></div>

          <div className="row">
            <div className="centered four wide column">
              <Link to="/test">
                <div className="ui huge primary button">Get Started <i className="right arrow icon"></i></div>
              </Link>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
