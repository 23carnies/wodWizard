const mongoose = require('mongoose');
const Schema = mongoose.Schema

const goalSchema = new Schema ({
  title: String,
  content: String,
  goalDate: Date
})

const userSchema = new Schema({
  name: String,
  email: String,
  avatar: String,
  googleId: String,
  bio: String,
  friends: [{ type: Schema.Types.ObjectId, ref: 'User'}],
  goalSchema: [goalSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);
