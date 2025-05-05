
//import mongoose

import mongoose from "mongoose";

//define schema
const goalSchema = new mongoose.Schema(
    {
        goal: String,
        deadline: String
    }
);

//create model
const Goal = mongoose.model("Goal", goalSchema);

export default Goal;
