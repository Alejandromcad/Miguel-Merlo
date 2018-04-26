var express = require("express"),
app         = express(),
bodyParser  = require("body-parser"),
flash       = require("connect-flash");

// APP CONFIGURATION
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(flash());
console.log(__dirname);

// IMPORTING ROUTES
var indexRoutes = require("./routes/index.js");

// USING ROUTES
app.use("/", indexRoutes);


app.listen(process.env.PORT, process.env.IP, () => {
    console.log("App started."); 
});
