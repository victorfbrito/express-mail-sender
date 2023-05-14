import nodemailer from 'nodemailer'

class SendMailService {
    
    execute({ subject, text}) {
        console.log('Enviando e-mail, assunto: ', subject)
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: process.env.MAIL_USERNAME,
                pass: process.env.MAIL_PASSWORD,
                clientId: process.env.OAUTH_CLIENTID,
                clientSecret: process.env.OAUTH_CLIENT_SECRET,
                refreshToken: process.env.OAUTH_REFRESH_TOKEN
            }
        });
    
        let mailOptions = {
            from: process.env.MAIL_USERNAME,
            to: process.env.MAIL_USERNAME,
            subject: subject,
            text: text
        };
    
        transporter.sendMail(mailOptions, function(err, data) {
            if (err) {
            console.log("Error " + err);
            } else {
            console.log("Email sent successfully");
            }
        });
    }
}

export default new SendMailService;