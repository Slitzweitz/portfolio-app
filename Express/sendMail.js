// Express server to send contact form data.
// Contact form will POST to: /contact on port: 8080
var app = require('express')(),
    mailer = require('express-mailer'),
    bodyParser = require('body-parser'),
    multer  = require('multer'),
    upload = multer(),
    expressValidator = require('express-validator');
// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail'),
      port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json());

app.use(expressValidator());

app.post('/contact', upload.array(), (req, res) => {
  // server block to send the email to myself with all contact form information
  // make sure expects application/json
  // req.body will contain information
  // validate and sanitize info:
  req.checkBody('personName', 'Invalid name').isAlpha();

  var contactName = req.body.personName;

  if (req.body) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: 'colinmbarlow@gmail.com',
      from: 'contact@colinmbarlow.com',
      subject: 'Sending with SendGrid is Fun',
      text: 'Name: ' + req.body.personName + ' Email: ' + req.body.email + ' Phone: ' + req.body.phone + ' Company: ' + req.body.company,
      html: '<h1>Name: ' + req.body.personName + ' Email: ' + req.body.email + ' Phone: ' + req.body.phone + ' Company: ' + req.body.company + '</h1>'
    };
    sgMail.send(msg);
    res.send('Message sent!' + msg)
  } else {
    res.send('no body on the request, message not sent' + req.body);
  }
})

app.listen(port);




// mailer.extend(app, {
//   from: 'contact@colinmbarlow.com',
//   host: 'smtp.gmail.com', // hostname
//   secureConnection: true, // use SSL
//   port: 465, // port for secure SMTP
//   transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
//   auth: {
//     user: 'gmail.colinmbarlow@gmail.com',
//     pass: process.env.GMAIL_PASS
//   }
// })
