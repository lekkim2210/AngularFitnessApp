import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        sets: { type: String, required: true },
        reps: { type: String, required: true }
    }
);

const exerciseModel = mongoose.model('exercise', ExerciseSchema);

  export default exerciseModel;