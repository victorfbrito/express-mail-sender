import nodemailer from 'nodemailer'

function renderCurrentTime() {
    var date = new Date();
    
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    
    // Add leading zeros if needed
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
    
    var currentTime = hours + ":" + minutes + ":" + seconds;
    
    return currentTime;
  }


class SendMailService {
    
    execute({ subject, text}) {
        console.log('Enviando e-mail, assunto: ', subject)
        console.log(renderCurrentTime())
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