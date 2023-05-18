import express from 'express';
import SendMailService from './SendMailService.js';

const sendMail = express.Router();

sendMail.get("/", async function  (req, res) {
    res.status(200).send({ msg: `Hello! Front-url: ${process.env.FRONT_URL}` });
  })

sendMail.get("/send_mail", async function (req, res) {
    res.status(200).send(
        { message: 'send_mail GET route working' }
    );
});
sendMail.post("/send_mail", async function (req, res) {
     const { subject, text } = req.body;
     SendMailService.execute({ 
         subject: subject,
         text: text
     });
     //do something
     res.status(200).send("Email sent");
});

export default sendMail;