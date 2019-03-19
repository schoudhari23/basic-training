const receipt = require('../models').receipt;

module.exports = {
  receiptList(req, res) {
    return receipt
      .findAll()
      .then((receipt) => res.status(200).send(receipt))
      .catch((error) => {res.status(400).send(error);});
  },

  getRecById(req, res) {
    console.log(req.body.rid);
    return receipt
      .findByPk(req.body.rid)
      .then((receipt) => res.status(200).send(receipt))
      .catch((error) => {res.status(400).send(error);});
  }
}