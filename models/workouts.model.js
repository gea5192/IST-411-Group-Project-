//import mongoose

const mongoose = require("mongoose");

//define schema
const workoutSchema = new mongoose.Schema(
    {
        type: String,
        duration: String,
        calories: String
    }
);

//create model
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;