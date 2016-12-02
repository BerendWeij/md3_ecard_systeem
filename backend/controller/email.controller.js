/**
 * Created by Artur on 11/18/2016.
 */
var nodemailer = require('nodemailer');
var templatesDir = path.resolve(__dirname, '..', 'views/mailer');
var emailTemplates = require('email-templates');


exports.send = function (req, res) {
    console.log('email send');
    console.log(req.ecardId);
    var smtpTransport = nodemailer.createTransport("SMTP", {
        service: "Gmail",
        auth: {
            user: "poppiepoephoofd@gmail.com",
            pass: "poppie123"
        }
    });

    var mailOptions = {
        to: 'mitchell.vermaning@gmail.com',
        subject: 'Test onderwerp',
        text: 'URL is: http://localhost/ecard/' + req.ecardId
    };

    smtpTransport.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.log(error);
        } else {
            console.log("Message sent: " + response.message);
            res.end("sent");
        }
    });
};