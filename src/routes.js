import SendMailService from './SendMailService.js';

export function SendMail(req, res) {
    SendMailService.execute({ 
        subject: req.subject,
        text: req.text
    });
}