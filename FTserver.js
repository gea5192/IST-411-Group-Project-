
//import the express
const express = require("express");

const connectDB = require("./config/database");

//create web server
const app = express();

connectDB();
app.use(express.json());

const Goal = require("./models/goals.model");
const Workout = require("./models/workouts.model");


// mount the modular routes
const goalsRoute = require("./goals");
app.use("/goals", goalsRoute);
const workoutsRoute = require("./workouts");
app.use("/workouts", workoutsRoute);

//start the server
app.listen(80, () => {
    console.log("Server is running on http://Alanas-MacBook-Pro.local/");
});