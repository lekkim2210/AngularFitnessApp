import mongoose from 'mongoose';
import { MongooseAutoIncrementID } from 'mongoose-auto-increment-reworked';
import ExerciseSchema from './exercise';

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String},
    exercises: { type: [ExerciseSchema] }
  });

  workoutSchema.plugin(MongooseAutoIncrementID.plugin, {
    modelName: 'workout',
  });

  const WorkoutModel = mongoose.model('workout', workoutSchema);

  export default WorkoutModel;