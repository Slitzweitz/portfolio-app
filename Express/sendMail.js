// Express server to send contact form data.
// Contact form will POST to: /contact on port: 8080
var app = require('express')(),
    mailer = require('express-mailer'),
    bodyParser = require('body-parser'),
    expressValidator = require('express-validator');
// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail'),
      port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator())

app.post('/contact', (req, res) => {
  // server block to send the email to myself with all contact form information
  // make sure expects application/json
  // req.body will contain information
  // validate and sanitize info:
  req.checkBody('name', 'Invalid name').isAlpha().catch((err) => {});

  if (req.body) {
    console.log(req.body);
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: 'colinmbarlow@gmail.com',
      from: 'contact@colinmbarlow.com',
      subject: 'Sending with SendGrid is Fun',
      text: req.body.userName + req.body.email + req.body.phone + req.body.company,
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    sgMail.send(msg);
    res.send('Message sent!')
  } else {
    res.send('no body on the request, message not sent');
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
