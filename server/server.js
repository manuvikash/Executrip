const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const routes = require("./routes/Routes");
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => console.log(error));
database.once("Connected", () => console.log("Connected to Database"));

app.use("/api", routes);

app.listen(port, () => console.log(`Server started on port ${port}`));
