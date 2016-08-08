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

        <div className="ui grid container">
          <div className="row">
            <div className="centered twelve wide column">
              <h2 className="ui center aligned icon header">
                <i className="circular mail icon"></i>
              </h2>
              <h3 className="ui center aligned header">Contact</h3>
              <h4 className="ui center aligned header">
                <p>NTU E-learning Lab</p>
                <p>Barry Lam Hall 515</p>
              </h4>
            </div>
          </div>

          <div className="ui hidden divider"></div>

          <div className="row">
            <div className="centered twelve wide column">
              <h2 className="ui center aligned icon header">
                <i className="circular user icon"></i>
              </h2>
              <h3 className="ui center aligned header">Author</h3>
              <h4 className="ui center aligned header">
                Zheng-Kang Liu
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="centered four wide column">
              <div className="ui list">
                <div className="item">
                  <i className="marker icon"></i>
                  <div className="content">
                    <i className="taiwan flag"></i>
                    Taiwan, Taipei
                  </div>
                </div>
                <div className="item">
                  <i className="university icon"></i>
                  <div className="content">
                    National Taiwan University
                  </div>
                </div>
                <div className="item">
                  <i className="mail icon"></i>
                  <div className="content">
                    r03921046 <i className="at icon"></i> ntu.edu.tw
                  </div>
                </div>
                <div className="item">
                  <i className="facebook square icon"></i>
                  <div className="content">
                    <a href="https://www.facebook.com/zheng.k.liu">zheng.k.liu</a>
                  </div>
                </div>
                <div className="item">
                  <i className=""></i>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    );
  }
}
