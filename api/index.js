import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { v4 } from "uuid";

import { SendMail } from "./routes.js";
dotenv.config()
// console.log(process.env) // remove this after you've confirmed it is working

const app = express()
const port = 3000

// app.use(express.json()); // Middleware for parsing request body as JSON
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", process.env.FRONT_URL); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
app.use(cors())
// const corsConfig = {
//   origin: `${process.env.FRONT_URL}`,
//   // origin: `http://localhost:5173`,
//   methods: ['POST', 'GET', 'PATCH', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Access-Control-Allow-Origin', 'Access-Control-Allow-Methods']
// };
// app.use(cors(corsConfig));

app.options('/api/send_mail', cors())

app.get('/api', (req, res) => {
  res.json({msg: `Hello! Front-url: ${process.env.FRONT_URL}`});
});

app.post('/api/send_mail', (req, res) => {
  console.log('req body: ', req.body)
  SendMail(req.body)
  res.json({res: `Hello! mail sent to ${process.env.MAIL_USERNAME}`})
});

app.get('/api/send_mail', (req, res) => {
  res.json({res: 'test'})
});

app.get('/api/', () => { console.log('test')})

app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`)
  console.log('base url: ',process.env.FRONT_URL)
  console.log(process.env.MAIL_USERNAME)
})