import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { SendMail } from "./routes.js";
dotenv.config()
// console.log(process.env) // remove this after you've confirmed it is working

const app = express()
const port = 3000

app.use(express.json()); // Middleware for parsing request body as JSON

const corsConfig = {
    credentials: true,
    origin: true,
};
app.use(cors(corsConfig));

app.post('/api/send_mail', (req, res) => {
  SendMail(req.body)
  return
});

app.get('/api/send_mail', (req, res) => {
  return res.json({res: 'test'})
});

app.get('/api/', () => { console.log('test')})

app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`)
  console.log(process.env.MAIL_USERNAME)
})