import mongoose from 'mongoose';
import { MongooseAutoIncrementID } from 'mongoose-auto-increment-reworked';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
  });

  userSchema.plugin(MongooseAutoIncrementID.plugin, {
    modelName: 'user',
  });

  let userModel = mongoose.model('user', userSchema);
  
  export default userModel;