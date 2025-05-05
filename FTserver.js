
import express from 'express';
import connectDB from './FTdatabase.js';
import goalsRoute from './routes/goals.js';
import workoutsRoute from './routes/workouts.js';

//create web server
const app = express();

connectDB();
app.use(express.json());

// mount the modular routes
app.use("/goals", goalsRoute);
app.use("/workouts", workoutsRoute);

//start the server
app.listen(3001, () => {
    console.log("Server is running on http://Alanas-MacBook-Pro.local/");
});
