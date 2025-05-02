
//import mongoose

const mongoose = require("mongoose");

//define schema
const goalSchema = new mongoose.Schema(
    {
        goal: String,
        deadline: String
    }
);

//create model
const Goal = mongoose.model("Goal", goalSchema);

module.exports = Goal;