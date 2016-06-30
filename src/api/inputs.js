import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Inputs = new Mongo.Collection('inputs');

if (Meteor.isServer) {
  Meteor.publish('inputs', function tasksPublication() {
    return Inputs.find();
  });
}

Meteor.methods({
  'inputs.keyUp'(keystroke, articleId) {
    check(keystroke, String);

    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Inputs.insert({
      key: keystroke,
      eventType: 'keyUp',
      owner: this.userId,
      articleId: articleId,
      createdAt: new Date()
    });
  },

  'inputs.keyDown'(keystroke, articleId) {
    check(keystroke, String);

    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Inputs.insert({
      key: keystroke,
      eventType: 'keyDown',
      owner: this.userId,
      articleId: articleId,
      createdAt: new Date()
    });
  },

  'inputs.keyPress'(keystroke, articleId) {
    check(keystroke, String);

    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Inputs.insert({
      key: keystroke,
      eventType: 'keyPress',
      owner: this.userId,
      articleId: articleId,
      createdAt: new Date()
    });
  },

  'inputs.input'(keystroke, articleId) {
    check(keystroke, String);

    if(!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Inputs.insert({
      key: keystroke,
      eventType: 'input',
      owner: this.userId,
      articleId: articleId,
      createdAt: new Date()
    });
  },

  'inputs.compositionStart'(keystroke, articleId) {
    check(keystroke, String);

    if(!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Inputs.insert({
      key: keystroke,
      eventType: 'compositionStart',
      owner: this.userId,
      articleId: articleId,
      createdAt: new Date()
    });
  },

  'inputs.compositionEnd'(keystroke, articleId) {
    check(keystroke, String);

    if(!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Inputs.insert({
      key: keystroke,
      eventType: 'compositionEnd',
      owner: this.userId,
      articleId: articleId,
      createdAt: new Date()
    });
  }
});
