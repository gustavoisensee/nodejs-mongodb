const User = require('./../database/user');

const find = () => {
  return User.find();
};

const create = (name) => {
  let user = new User({
    name
  });
  return user.save();
};

const _delete = (_id) => {
  return User.remove({ _id });
};

module.exports = {
  find,
  create,
  delete: _delete
};
