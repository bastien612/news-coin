var nodemailer = require('nodemailer');

module.exports = {
    sendMail: function (mailOption) {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'crypto.watcher612@gmail.com',
                pass: 'HDN41acs'
            }
        });

        transporter.sendMail(mailOptions, function (error, info) {

            if (error) {
                console.log("Une erreur ! " + error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }
}