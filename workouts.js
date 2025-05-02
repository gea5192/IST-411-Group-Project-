//import express
const express = require("express");
const router = express.Router();
const Workout = require("./models/workouts.model");

//implement server code to handle requests
// GET all workouts
router.get("/", async (req, res) => {
    try {
      const workouts = await Workout.find();
      res.json(workouts);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  // POST new workout
  router.post("/", async (req, res) => {
    try {
      const newWorkout = await Workout.create(req.body);
      res.status(201).json(newWorkout);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  
  // GET workout by ID
  router.get("/:id", async (req, res) => {
    try {
      const workout = await Workout.findById(req.params.id);
      if (!workout) return res.status(404).json({ error: "Workout not found" });
      res.json(workout);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

module.exports = router;