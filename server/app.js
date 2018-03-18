const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const passport = require("passport");

const app = express();

app.use(express.static("../client"));
app.use(cookieParser());
app.use(
  expressSession({
    secret: "everythingistopsecret",
    resave: true,
    saveUninitialized: true
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

require("./passports/passport-index");

require("./routers/index")(app);

app.listen(8081);
