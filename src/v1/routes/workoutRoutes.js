const express = require("express");
const router = express.Router();
const workoutController = require("../../controllers/workoutController");

router
  .get("/", workoutController.getAllWorkouts)
  .get("/:id", workoutController.getOneWorkout)
  .post("/", workoutController.createNewWorkout)
  .patch("/:id", workoutController.updateWorkout)
  .delete("/:id", workoutController.deleteWorkout);

module.exports = router;