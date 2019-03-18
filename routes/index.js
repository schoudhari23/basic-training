`use strict`;
const express = require(`express`);
const router = express.Router();
const myFunc = require(`../controller/index.js`);
const models = require('../models');

/*var obj = {
    "name": "order2",
    "items": [
        {
            "name": "box of chocolates",
            "category": "food",
            "quantity": 1,
            "price": 10,
            "imported": true
        },
        {
            "name": "bottle of perfume",
            "category": "perfume",
            "quantity": 1,
            "price": 47.50,
            "imported": true
        }
    ]
}*/



router.get(`/`, function (req, res) {
    res.render(`index`);
});

router.post(`/`, function (req, res, next) {
    res.write(myFunc.method(req.body.problem));
    res.end();
});

const obj = myFunc.output;

console.log(obj);

/*models.receipt.create({
    salesTax: 87.1,
    total: 90
}).then(receipt => {
    console.log(receipt.dataValues);
    for(var i=0;i<obj.items.length;i++)
    {
        models.order.build({
            name: obj.items[i].name,
            quantity: obj.items[i].quantity,    
            imported: "true",
            category: obj.items[i].category,
            price: obj.items[i].price,
            receiptId: receipt.dataValues.id
        }).save().then(function(newOrder){
            console.log(newOrder.dataValues);
        });
    }
});*/

module.exports = router;
