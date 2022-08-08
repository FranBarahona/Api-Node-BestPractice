const workoutService = require("../services/workoutService");

const getAllWorkouts = (req, res) => {
  const allWorkouts = workoutService.getAllWorkouts();
  res.send({ status: "success", data: allWorkouts });
};

const getOneWorkout = (req, res) => {
  const workout = workoutService.getOneWorkout(req.params.id);
  res.send({ status: "success", data: workout });
};

const createNewWorkout = (req, res) => {
  const { body } = req;
  //Valida si el body viene vacio
  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    return;
  }
  // si el body no viene vacio crea un nuevo objeto
  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  };
  const createdWorkout = workoutService.createNewWorkout(newWorkout);
  res.status(201).send({status: 'Ok', data:createdWorkout});
};

const updateWorkout = (req, res) => {
  const updateWorkout = workoutService.updateWorkout(req.params.id, req.body);
  res.send({ status: "success", data: updateWorkout });
};

const deleteWorkout = (req, res) => {
  workoutService.deleteWorkout(req.params.id);
  res.send({ status: "success", data: {} });
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateWorkout,
  deleteWorkout,
};
