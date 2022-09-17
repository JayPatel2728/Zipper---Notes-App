const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");

const app = express();
const path = require('path');
dotenv.config({path: path.resolve(__dirname, '../.env')}); //so i can use env variables
connectDB();
app.use(express.json()); //used for postman requests

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.use("/api/users", userRoutes);

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
