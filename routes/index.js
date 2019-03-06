var express = require('express');
var router = express.Router();
require('console.html');

var method = require('../controller/index.js');

router.get('/', function(req, res) {
    res.render('index');
});

router.post('/', function(req, res, next) {
    res.write(method(req.body.problem));
    res.end();
});

module.exports = router;

