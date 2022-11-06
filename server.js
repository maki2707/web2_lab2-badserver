require("dotenv").config();
const express = require("express");
const https = require("https");
const fs = require("fs");
const app = express();
var path = require("path");

const {
  ResultWithContext
} = require("express-validator/src/chain");
const externalUrl = process.env.RENDER_EXTERNAL_URL;
const port = process.env.PORT ? parseInt(process.env.PORT) : 4000;
var cookieParser = require('cookie-parser');
const session = require('cookie-session')
/*********************************************************************************************************************************/

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({
  extended: true
})); 
app.use(cookieParser());
app.use(session(
  {
  keys:['KrEvVVQElLqgMdcoCo6moFVfqynKJGNsnG62vbsezZmou2MCb2TRb8d7a21wN1MY4ITgU7OtmBEGLMJdGZOQHnFW14OLtkSpi4lQm9GqGk0ccwaG1bcYyL0wdXRCP0eUfJXSShkjMZIbDcx3diY5s2jEVnrDxs7vb9Ln1QFFIKwBgK1C0KLQGGN5TBGclkdON1txwluJ'],
  saveUninitialized: false,
  maxAge: 1000 * 60 * 60 * 24,
  skipSilentLogin:false,
  httpOnly:false
}));
app.get('/', async function (req, res){  
 
  res.render("attack", {
      title: "attack",  
  }) 
  console.log(req.session)
});

/****************************** E N D    O F     R  O  U  T  E  S *********************************************************************************/
if (externalUrl) {
  const hostname = "127.0.0.1";
  app.listen(port, hostname, () => {
    console.log(`Server locally running at http://${hostname}:${port}/ and from
    outside on ${externalUrl}`);
  });
} else {
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
}