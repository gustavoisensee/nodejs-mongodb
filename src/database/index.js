const mongoose = require('mongoose');
const { connection } = mongoose;

mongoose.Promise = Promise;
mongoose.connect('mongodb://root:root@ds151941.mlab.com:51941/gustavoisensee-db');

connection.on('error', (err) => console.log('connection error: ', err));
connection.once('open', () => console.log('connected'));

module.exports = {
  db: connection
};
