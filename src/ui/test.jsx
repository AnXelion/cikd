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
        <div key={article._id}>
          <Paragraph {...article} />
          <TextArea {...article} />
          <div className="ui horizontal divider"></div>
        </div>
      );
    });
  }

  render() {
    if (Meteor.userId()) {
      return (
        <div>
          {this.renderArticles()}
        </div>
      );
    }
    else {
      return (
        <div>
          Plese login!
        </div>
      );
    }
  }
}

export default createContainer(() => {
  Meteor.subscribe('articles');

  return {
    articles: Articles.find().fetch(),
  }

}, Test);
