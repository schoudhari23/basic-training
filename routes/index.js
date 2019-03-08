`use strict`;
const express = require(`express`);
const router = express.Router();
require(`console.html`);

const method = require(`../controller/index.js`);

router.get(`/`, function (req, res) {
    res.render(`index`);
});

router.post(`/`, function (req, res, next) {
    res.write(method(req.body.problem));
    res.end();
});

module.exports = router;
