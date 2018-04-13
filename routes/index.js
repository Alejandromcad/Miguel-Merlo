var express = require("express");
var router  = express.Router();


// HOME PAGE
router.get("/", (req, res) =>{
    res.send("home");
});

// ABOUT ME
router.get("/aboutme", (req, res) =>{
    res.render("aboutme");
});

// PORTFOLIO
router.get("/portfolio", (req, res) =>{
    res.render("portfolio");
});

// CONTACT

router.get("/contact", (req, res) =>{
    res.render("contact");
});


module.exports = router;


