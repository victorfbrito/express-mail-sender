import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { v4 } from "uuid";

import { SendMail } from "./routes.js";
dotenv.config()
// console.log(process.env) // remove this after you've confirmed it is working

const app = express()
const port = 3000

app.use(express.json()); // Middleware for parsing request body as JSON

const corsConfig = {
  credentials: true,
  origin: '*',
  methods: ['POST', 'GET', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsConfig));

app.get('/api', (req, res) => {
  const path = `/api/item/${v4()}`;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.post('/api/send_mail', (req, res) => {
  console.log('req body: ', req.body)
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  SendMail(req.body)
  return res.json({res: `Hello! mail sent to ${process.env.MAIL_USERNAME}`})
});

app.get('/api/send_mail', (req, res) => {
  return res.json({res: 'test'})
});

app.get('/api/', () => { console.log('test')})

app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`)
  console.log(process.env.MAIL_USERNAME)
})