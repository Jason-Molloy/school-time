let mongoose = require('mongoose')
//let Teachers = require('./teacher')
let Schema = mongoose.Schema

let student = new Schema({
  name: { type: String, required: true },
  //teachers: { type: Schema.Types.ObjectId, ref: 'student', virtual: true }
})

// student.pre("remove", function (next) {
//   Students.remove({ student: this._id })
//     .then(() => next())
//     .catch(err => next(err))
// })



module.exports = mongoose.model('Student', student)