const functions = require("firebase-functions");
const { parse } = require("url");
const next = require("next");
const config = require("./next.config");

var dev = process.env.NODE_ENV !== "production";
var app = next({ dev, conf: config, dir: dev ? "../" : "." });
var handle = app.getRequestHandler();
var prepared = false;
app
  .prepare()
  .then(() => {
    console.log("done prepare");
    prepared = true;
  })
  .catch(e => {
    console.error(e);
  });

exports.next = functions.https.onRequest((req, res) => {
  const parsedUrl = parse(req.url, true);

  console.log("File: " + req.originalUrl); // log the page.js file that is being requested

  if (!prepared) return res.status(200).end();
  return handle(req, res, parsedUrl);
});
