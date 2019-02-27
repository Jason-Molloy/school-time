let mongoose = require('mongoose')
let Classrooms = require('./classroom')
///needs a few more variables for completion
let Schema = mongoose.Schema

let school = new Schema({
  name: { type: String, required: true },
  classrooms: { type: Schema.Types.ObjectId, ref: 'classroom', virtual: true }
})

school.pre("remove", function (next) {
  Classrooms.remove({ school: this._id })
    .then(() => next())
    .catch(err => next(err))
})



module.exports = mongoose.model('School', school)