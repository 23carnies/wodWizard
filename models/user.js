const mongoose = require('mongoose');
const Schema = mongoose.Schema

// const resultSchema = new Schema ({
//   time: {type: String},
//   reps: {type: Number},
//   rounds: {type: String},
//   distance: {type: Number},
//   user: [{ type: Schema.Types.ObjectId, ref: 'User'}],
//   wodId: {type: String},
//   wodTitle: {type: String}
// }, {
//   timestamps: true
// })




// const resultSchema = new Schema ({
//   result: String,
//   wodId: {type: Schema.Types.ObjectId, ref: 'Wod'}
// }, {
//   timestamps: true
// })
// const resultSchema = new Schema ({
//   time: String,
//   reps: Number,
//   rounds: String,
//   Distance: Number,
//   otherResult: String,
//   wodId: {type: Schema.Types.ObjectId, ref: 'Wod'}
// }, {
//   timestamps: true
// })

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
  // results: [resultSchema],
  goals: [goalSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);
