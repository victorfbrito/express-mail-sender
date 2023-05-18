import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { v4 } from "uuid";

import { SendMail } from "./routes.js";
dotenv.config();

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

// Middleware for parsing request body as JSON
app.use(express.json());

// Define CORS options
const corsOptions = {
  origin: process.env.FRONT_URL, // Replace with your front-end URL
  methods: ['POST', 'GET', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

// Enable CORS for the specific route
app.options('/api/send_mail', cors(corsOptions));

app.get('/api', (req, res) => {
  res.json({ msg: `Hello! Front-url: ${process.env.FRONT_URL}` });
});

app.post('/api/send_mail', cors(corsOptions), (req, res) => {
  console.log('req body: ', req.body);
  SendMail(req.body);
  res.json({ res: `Hello! Mail sent to ${process.env.MAIL_USERNAME}` });
});

app.get('/api/send_mail', (req, res) => {
  res.json({ res: 'test' });
});

app.get('/api/', () => {
  console.log('test');
});

app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`);
  console.log('base url: ', process.env.FRONT_URL);
  console.log(process.env.MAIL_USERNAME);
});
