const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const noteRoutes  = require("./routes/noteRoutes")
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");

const app = express();
const path = require('path');
dotenv.config({path: path.resolve(__dirname, '../.env')}); //so i can use env variables
connectDB();
app.use(express.json()); //used for postman requests


app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
