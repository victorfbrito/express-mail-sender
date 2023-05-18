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
     const result = await SendMailService.execute({ 
         subject: subject,
         text: text
     })
    if (result.accepted) {
        res.status(200).send("Email sent successfully");
    } else {
        res.status(200).send("Error " + err);
    }
});

export default sendMail;