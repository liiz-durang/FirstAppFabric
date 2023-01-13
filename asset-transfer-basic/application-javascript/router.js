// load the things we need
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('pages/index');
});

router.get('/create', function (req, res) {
    res.render('pages/create', {
        success:{}
    });
});

router.get('/read', function (req, res) {
    res.render('pages/read', {
        answer:{}
    });
});

router.get('/evaluate', function (req, res) {
    res.render('pages/evaluate', {
        answer:{}
    });
});

router.get('/update', function (req, res) {
    res.render('pages/update', {
        success:{},
    });
});

router.get('/transfer', function (req, res) {
    res.render('pages/transfer', {
        success:{},
    });
});



module.exports = router;