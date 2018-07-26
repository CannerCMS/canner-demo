const functions = require("firebase-functions");
const { parse } = require("url");
const next = require("next");
const config = require("./next.config");
const nodemailer = require("nodemailer");
const {
  renderConsumerHTML,
  renderOwnerHTML,
  renderContactHTML
} = require("./renderHTML");

// Configure the email transport using the default SMTP transport and a GMail account.
// For other types of transports such as Sendgrid see https://nodemailer.com/transports/
// TODO: Configure the `gmail.email` and `gmail.password` Google Cloud environment variables.
const gmailEmail = "canner.js@gmail.com";
const gmailPassword = "thisiscanner123";
const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
});

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

exports.contact = functions.https.onCall((data, context) => {
  const { name, phone, email, content } = data;
  const mailOptions = {
    from: "Hanata_SÜSS <info@canner.io>", // sender address (who sends)
    to: dev ? "chilijung@gmail.com" : "sussflora@gmail.com", // list of receivers (who receives)
    subject: "Canner 通知：有顧客聯絡您！", // Subject line
    html: renderContactHTML(name, phone, email, content) // html body
  };

  return new Promise((resolve, reject) => {
    mailTransport.sendMail(mailOptions, function(error, info) {
      if (error) {
        return reject(
          new functions.https.HttpsError(
            "傳送訊息失敗",
            "傳送聯絡資訊時發生錯誤"
          )
        );
      }

      console.log("Message sent: " + info.response);
      return resolve({ ok: true });
    });
  });
});
