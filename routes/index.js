var express = require("express");
var router  = express.Router({mergeParams: true});
var nodemailer = require("nodemailer");


// HOME PAGE
router.get("/", (req, res) =>{
    res.render("home");
});

// CONTACT
router.get("/contact", (req, res) =>{
    res.render("contact");
});
router.post("/contact", (req, res) => {
    // takes data from the form and sends it to my gmail
      var smtpTrans = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
            user: process.env.GMAIL_USER || "miguealemer@gmail.com",
            pass: process.env.GMAIL_PASS || "130499mix"
        }
      });

        var mailOptions = {
          from: req.body.name + ' &lt;' + req.body.email + '&gt;',
          to:   process.env.GMAIL_USER || "miguealemer@gmail.com",
          subject: "New message from contact form at MiguelMerlo.com",
          text: `${req.body.name} (${req.body.email}) dice: ${req.body.message}`
        };

         smtpTrans.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
            res.redirect("/contact");
          }
        });
        
});
module.exports = router;


