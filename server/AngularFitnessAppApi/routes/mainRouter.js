import express from 'express';
var router = express.Router();
import workoutController from '../controllers/workoutController';
import userController from '../controllers/userController';
import { runInContext } from 'vm';

router.get('/workouts', workoutController.getAllWorkouts);

router.get('/workouts/:id', workoutController.getSingleWorkout);

router.post('/workouts', workoutController.addNewWorkout);

router.post('/workouts/:id', workoutController.addNewExercise);

router.post('/register', userController.registerUser);

router.post('/login', userController.login);


// export the router
export default router;
