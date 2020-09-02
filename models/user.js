const mongoose = require('mongoose');
const Schema = mongoose.Schema

const resultSchema = new Schema ({
  time: String,
  reps: Number,
  rounds: String,
  distance: Number,
  wodId: String
}, {
  timestamps: true
})

const goalSchema = new Schema ({
  title: String,
  content: String,
  goalDate: Date,
  complete: Boolean
}, {
  timestamps: true
})

const userSchema = new Schema({
  name: String,
  email: String,
  avatar: String,
  moniker: String,
  googleId: String,
  bio: String,
  friends: [{ type: Schema.Types.ObjectId, ref: 'User'}],
  results: [resultSchema],
  goals: [goalSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);
