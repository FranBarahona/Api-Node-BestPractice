const DB = require("../database/db");
const { saveToDatabase } = require("./utils");

const getAllWorkouts = () => {
  //retorna todos los registros
  return DB.workouts;
};

const createNewWorkout = (newWorkout) => {
  //verifica si el registro ingresado ya existe
  const isAlReadyAdded =
   DB.workouts.findIndex((workout) => workout.name === newWorkout.name)>-1 ;

  if (isAlReadyAdded) {
    return;
  }

  //se agrega el objeto al array de objetos
  DB.workouts.push(newWorkout);
  //se modifica el fichero con los datos actualizados
  saveToDatabase(DB);

  return newWorkout;
};

module.exports = { getAllWorkouts, createNewWorkout };
