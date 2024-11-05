import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import bookRoute from "./routes/booksRoute.js"
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors({
    origin: 'https://book-corner-frontend.onrender.com', // restrict to your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // only allow the methods you use
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

