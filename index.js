import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import AppRoute from './routes/AppRoute.js';
import cookieSession from 'cookie-session';
dotenv.config();



// import routers
import userRoutes from './routes/UserRoutes.js';



const app = express();
const PORT = process.env.PORT || 3030;
const MONGODB = process.env.MONGODB;

mongoose.connect(MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


// database connection
const db = mongoose.connection;
db.on("err", (error) => {
    console.log(error);
});

db.once("open", () => {
    console.log("Database connected...");
});


app.use(cors());

// parse requests of content-type : application-json
app.use(express.json());

// parse requests of content-type : application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// using Cookie Session
app.use(
    cookieSession({
        name: "pln-session",
        keys: [process.env.SECRET],
        httpOnly: true,
    })
);


// app routes
app.use(AppRoute);



// set port and listen for requests
app.listen(PORT, () => {
    console.log(`Server is up and running on http://localhost:${PORT}`);
});


app.use("/api/users/", userRoutes);


