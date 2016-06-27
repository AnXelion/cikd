import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Articles = new Mongo.Collection('articles');

if (Meteor.isServer) {
  Meteor.publish('articles', function tasksPublication() {
    return Articles.find();
  });
}

Meteor.methods({
  'articles.insert'(text) {
    check(text, String);

    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Articles.insert({
      text: text,
      createdAt: new Date()
    });
  }
});
