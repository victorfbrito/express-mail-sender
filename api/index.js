import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import routes from "./routes.js";
dotenv.config();

const app = express();
const port = 3000;

// Define CORS options
const corsOptions = {
  // origin: process.env.FRONT_URL, // Replace with your front-end URL
  origin: '*',
  methods: ['POST', 'GET', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

// Enable CORS for routes
app.use(cors(corsOptions));

// Middleware for parsing request body as JSON
app.use(express.json());

app.use('/api', routes)

app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`);
  console.log('base url: ', process.env.FRONT_URL);
  console.log(process.env.MAIL_USERNAME);
});
