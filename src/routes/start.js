const router = require('express').Router();

require('./general')(router);
require('./user')(router);
//here I must put all routes, for example: product, user, group and other.

module.exports = router;
