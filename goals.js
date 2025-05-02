//import express
const express = require("express");
const router = express.Router();
const Goal = require("./models/goals.model");

//implement server code to handle requests
// GET all goals
router.get("/", async (req, res) => {
    try {
      const goals = await Goal.find();
      res.json(goals);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  // POST new goal
  router.post("/", async (req, res) => {
    try {
      const newGoal = await Goal.create(req.body);
      res.status(201).json(newGoal);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  
  // GET goal by ID
  router.get("/:id", async (req, res) => {
    try {
      const goal = await Goal.findById(req.params.id);
      if (!goal) return res.status(404).json({ error: "Goal not found" });
      res.json(goal);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

  module.exports = router;