const order = require('../models').order;
const receipt = require('../models').receipt;

function ordersList(req, res) {
  return order
    .findAll()
    .then((orders) => res.status(200).json(orders))
    .catch((error) => {
      res.status(400).send(error);
    });
}

function getOrdById(req, res) {
  order
    .findByPk(req.body.oid)
    .then((orders) => res.status(200).json(orders))
    .catch((error) => {
      res.status(400).send(error);
    });
}

module.exports = {
 ordersList, getOrdById 
}