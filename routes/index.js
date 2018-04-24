var express = require("express");
var router  = express.Router();


// HOME PAGE
router.get("/", (req, res) =>{
    res.render("home");
});

// CONTACT

router.get("/contact", (req, res) =>{
    res.render("contact");
});


module.exports = router;


