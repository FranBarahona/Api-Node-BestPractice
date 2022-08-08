const { v4: uuid } = require("uuid");
const workout = require("../database/workout");

const getAllWorkouts = () => {
  const allWorkouts = workout.getAllWorkouts();
  return allWorkouts;
};
const getOneWorkout = () => {
  return;
};
const createNewWorkout = (newWorkout) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updateAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };

  const createWorkout = workout.createNewWorkout(workoutToInsert);
  return createWorkout;
};

const updateWorkout = () => {
  return;
};
const deleteWorkout = () => {
  return;
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateWorkout,
  deleteWorkout,
};
