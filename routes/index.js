`use strict`;
const express = require(`express`);
const router = express.Router();
const method = require(`../controller`).method;
const Order = require('../controller/order');
const Receipt = require('../controller/receipt');

router.get(`/`, function (req, res) {
    res.render(`index`);
});

router.post(`/`, function (req, res, next) {
    res.write(method(req.body.problem));
});

router.get('/orders', Order.ordersList);
router.get('/receipt', Receipt.receiptList);
router.post('/specificOrder', Order.getOrdById);
router.post('/specificReceipt', Receipt.getRecById);

module.exports = router;