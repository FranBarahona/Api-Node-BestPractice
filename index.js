const express = require("express");
const v1WorkoutRouter = require("./src/v1/routes/workoutRoutes");
const {writeFile,readFile} = require("./src/utils/utils");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(express.json())
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
  writeFile(__dirname+'/ejemploNuevo.txt',"Este es un ejemplo nuevo");
   readFile(__dirname+'/ejemplo.txt');
  console.log(`😎 Server is listening on port ${PORT}`);
});
