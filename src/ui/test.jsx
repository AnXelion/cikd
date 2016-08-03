import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Meteor } from 'meteor/meteor';

import { Articles } from '../api/articles';

import Paragraph from '../components/paragraph';
import TextArea from '../components/textarea';

class Test extends Component {
  renderArticles() {
    return this.props.articles.map((article) => {
      return (
        <div className="ui segments" key={article._id}>
          <div className="ui segment">
            <Paragraph {...article} />
          </div>
          <div className="ui segment">
            <TextArea {...article} />
          </div>
          {/* <div className="ui horizontal divider"></div> */}
        </div>
      );
    });
  }

  render() {
    // Whether user logs in
    if (Meteor.userId() && BrowserDetect.browser == 'Chrome' && BrowserDetect.version >= 51) {
        return (
          <div>
            {this.renderArticles()}
          </div>
        );
    }
    else {
      return (
        <div className="ui error message">
          <div className="ui header">
            There is something you should do before taking the test.
          </div>
          <div className="list">
            <li>Please login.</li>
            <li>Using Chrome (version >= 51) during the test.</li>
          </div>
        </div>
      );
    }
  }
}

export default createContainer(() => {
  Meteor.subscribe('articles');

  return {
    articles: Articles.find().fetch()
  }

}, Test);
