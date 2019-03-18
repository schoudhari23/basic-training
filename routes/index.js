`use strict`;
const express = require(`express`);
const router = express.Router();
const myFunc = require(`../controller/index.js`);
const Order = require(`../models`).Order;
const Receipt = require(`../models`).Receipt;

Receipt.create({
    salesTax: 23.1,
    total: 123
}).then(receipt => {
    receipt.createOrder({
        name: "Chocolate",
        quantity: 5,    
        imported: true,
        category: "food",
        price: 52
    }).then(() => console.log("Worked!"));
});

router.get(`/`, function (req, res) {
    res.render(`index`);
});

router.post(`/`, function (req, res, next) {
    res.write(myFunc.method(req.body.problem));
    res.end();
});

module.exports = router;
