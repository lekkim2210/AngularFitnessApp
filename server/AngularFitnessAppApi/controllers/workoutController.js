import mongoose from 'mongoose';
import WorkoutModel from '../models/workout';
import ExerciseModel from '../models/exercise';

let workoutController = {};

workoutController.getAllWorkouts = (req, res) => {
  WorkoutModel.find().then(workouts => {
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
    WorkoutModel.findById(workoutId).then(workout => {
      res.status(200);
      res.json(workout);
      return;
    });
    return;
  };
  
  workoutController.addNewWorkout = (req, res) => {
    console.log('req: ', req.body);
    if(!req.body.name || req.body.name === ''){
      res
        .status(400)
        .json({"message" : "name cannot be empty"});
        console.log('req: ', req.body);
        return;
    }
    const newWorkout = new WorkoutModel({
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

  
  workoutController.addNewExercise = (req, res) => {
    if(!req.body.name || !req.body.description || 
      !req.body.sets || !req.body.reps){
        res
          .status(400)
          .json({"message" : "Request must include id, exercise_name, description, set, and duration"});
        return;
      }
  
    const newExercise = new ExerciseModel();
    newExercise.name = req.body.name;
    newExercise.description = req.body.description;
    newExercise.set = req.body.sets;
    newExercise.duration = req.body.reps;
    
    WorkoutModel.findByIdAndUpdate(req.params.id, {
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