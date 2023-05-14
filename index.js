import express from "express";
import dotenv from 'dotenv';
import { SendMail } from "./routes.js";
dotenv.config()
console.log(process.env) // remove this after you've confirmed it is working

const app = express()
const port = 3000

app.use(express.json()); // Middleware for parsing request body as JSON

app.post('/send_mail', SendMail);
app.get('/send_mail', (req, res) => {
  console.log('sending mail')
  return res.json({res: 'test'})
});

app.get('/', () => { console.log('test')})

app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`)
  console.log(process.env.MAIL_USERNAME)
})