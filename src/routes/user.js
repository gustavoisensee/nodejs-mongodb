const model = require('./../models/user');

const userRoute = (router) => {
  router
    .get('/user', (req, res) => {
      model.find().then(users => {
        res.json(users);
      });
    })
    .delete('/user/:id', (req, res) => {
      const { id } = req.params;
      model.delete(id).then(result => {
        res.json(result);
      });
    })
    .post('/user', (req, res) => {
      const { name } = req.body;
      model.create(name).then(user => {
        res.json(user);
      });
    });
};

module.exports = userRoute;
