import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import AppRoute from './routes/AppRoute.js'
dotenv.config();



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
app.use(express.json());
app.listen(PORT, () => {
    console.log(`Server is up and running on http://localhost:${PORT}`);
});

app.use(AppRoute);

