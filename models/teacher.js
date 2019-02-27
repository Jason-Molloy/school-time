let mongoose = require('mongoose')
let Students = require('./student')
let Schema = mongoose.Schema

let teacher = new Schema({
  name: { type: String, required: true },
  students: { type: Schema.Types.ObjectId, ref: 'student', virtual: true }
})

teacher.pre("remove", function (next) {
  Students.remove({ teacher: this._id })
    .then(() => next())
    .catch(err => next(err))
})



module.exports = mongoose.model('Teacher', teacher)