let mongoose = require('mongoose')
let Teachers = require('./teacher')
let Schema = mongoose.Schema

let classroom = new Schema({
  name: { type: String, required: true },
  teachers: { type: Schema.Types.ObjectId, ref: 'teacher', virtual: true }
})

classroom.pre("remove", function (next) {
  Teachers.remove({ classroom: this._id })
    .then(() => next())
    .catch(err => next(err))
})



module.exports = mongoose.model('Classroom', classroom)