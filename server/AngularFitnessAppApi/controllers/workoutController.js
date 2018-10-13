import mongoose from 'mongoose';
import Workout from '../models/workout';
import ExerciseSchema from '../models/exercise';

let workoutController = {};

workoutController.getAllWorkouts = (req, res) => {
    Workout.find().then(workouts => {
      res.status(200);
      res.json(workouts);
      return;
    });
    return;
  };
  
  workoutController.getSingleWorkout = (req, res) => {
    if(!req.params.id){
      res
        .status(400)
        .json({"message" : "id cannot be empty"});
        return;
    }
    const workoutId = req.params.id;
    Workout.findById(workoutId).then(workout => {
      res.status(200);
      res.json(workout);
      return;
    });
    return;
  };
  
  workoutController.addNewWorkout = (req, res) => {
    if(!req.body.name || req.body.name === ''){
      res
        .status(400)
        .json({"message" : "name cannot be empty"});
        return;
    }
    const newWorkout = new WorkoutProgram({
      name : req.body.name
    });
    newWorkout.save(
      (err, savedObject) =>{
        res
          .status(200)
          .json(savedObject)
      }
    );
    return;    
  }
  
  let ExerciseProgram = mongoose.model('ExerciseProgram', ExerciseSchema);
  
  workoutController.addNewExercise = (req, res) => {
    if(!req.body.name || !req.body.description || 
      !req.body.sets || !req.body.reps){
        res
          .status(400)
          .json({"message" : "Request must include id, exercise_name, description, set, and duration"});
        return;
      }
  
    const newExercise = new ExerciseProgram();
    newExercise.name = req.body.name;
    newExercise.description = req.body.description;
    newExercise.set = req.body.sets;
    newExercise.duration = req.body.reps;
    
    WorkoutProgram.findByIdAndUpdate(req.params.id, {
      $addToSet: { exercises: newExercise },
    }).then(() => {
      res
        .status(200)
        .json(newExercise);
      return;
    });
    return;
  }
  
  export default workoutController;