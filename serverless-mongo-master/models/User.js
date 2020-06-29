import { Schema, model } from 'mongoose';
const UserSchema = new Schema({
  id: String,
  firstName: String,
  lastName: String,
  createdAt: Date
});
export default model('User', UserSchema);