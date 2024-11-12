import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import bookRoute from "./routes/booksRoute.js"
import cors from "cors";

const app = express();

app.use(express.json());

  
  app.use(cors({
    origin: [process.env.FRONTEND_URL, 'http://localhost:3000'], // Configures CORS to allow requests from the specified origins
    credentials: true // Allows cookies and credentials to be sent with requests
}));



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

