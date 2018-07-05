import * as mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  googleId: String,
  name: String,
});

export default mongoose.model('users', userSchema);
