import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import bookRoute from "./routes/booksRoute.js"
import cors from "cors";

const app = express();

app.use(express.json());

const allowedOrigins = [
    'http://localhost:5173', // Local development frontend
    'https://book-corner-frontend.onrender.com' // Deployed frontend
  ];
  
  app.use(cors({
    origin: function (origin, callback) {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }));


app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome to MERN Stack')
});

app.use('/books',bookRoute); 

mongoose.connect(mongoDBURL)
    .then(() => {
        console.log("App connected to db");
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`)
        });
    })
    .catch((error) => {
        console.error(error)
    });

