var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    // res.render('index', { title: 'Hola mamaaaa' });
    res.send("Prueba Sin motor de vista");
});

module.exports = router;
