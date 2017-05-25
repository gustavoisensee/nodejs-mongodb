const { Schema } = require('mongoose');
const { db } = require('./index');

const UserSchema = Schema({
  name: String
});

const UserModel = db.model('User', UserSchema);

module.exports = UserModel;
