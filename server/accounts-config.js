import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Accounts.onCreateUser(function(options, user) {
  // We still want the default hook's 'profile' behavior.
  if (options.profile)
    user.profile = options.profile;

    // First login user should be the admin
    if ((Meteor.users.find({}).count()) == 0) {
      user.profile.role = 'admin';
    }
    else {
      user.profile.role = 'tester';
    }

  return user;
});
