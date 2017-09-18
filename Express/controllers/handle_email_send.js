const expressValidator = require('express-validator');
app.use(expressValidator(middlewareOptions));

// Handle email send on POST
exports.handle_email_send = function(req, res, next) {

    //Check that the name field is letters
    req.checkBody('personName', 'Genre name required').isAlpha();

    //Trim and escape the name field.
    req.sanitize('personName').escape();
    req.sanitize('personName').trim();

    //Run the validators
    var errors = req.validationErrors();

    //Create a genre object with escaped and trimmed data.
    var email = new Email(
      { name: req.body.personName }
    );

    if (errors) {
        //If there are errors render the form again, passing the previously entered values and errors
        res.send(errors)
    return;
    }
    else {
      // Data from form is valid.
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
    }
}
