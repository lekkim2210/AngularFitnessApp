import express from 'express';
var router = express.Router();
import workoutController from '../controllers/workoutController';
import { runInContext } from 'vm';

router.get('/workouts', workoutController.getAllWorkouts);

router.get('/workouts/:id', workoutController.getSingleWorkout);

router.post('/workouts', workoutController.addNewWorkout);

router.post('/workouts/:id', workoutController.addNewExercise);

/*
router.post('/register', userController.register);

router.post('/login', userController.login);

router.get('/workoutLogs', auth, userController.getWorkoutLogs);

router.post('/workoutLogs', auth, userController.addWorkoutLog);
*/
// export the router
export default router;
