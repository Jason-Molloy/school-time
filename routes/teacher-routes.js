let Teachers = require('../models/teacher')
let Students = require('../models/student')
let router = require('express').Router()

router.get('', (req, res, next) => {
  Teachers.find({})
    .then(teachers => res.send(teachers))
    .catch(err => res.status(400).send(err))
})

router.get('/:id', (req, res, next) => {
  Teachers.findById(req.params.id)
    .then(teacher => res.send(teacher))
    .catch(err => res.status(400).send(err))
})

router.get('/:id/students', (req, res, next) => {
  Students.find({ teacher: req.params.id })
    .then(students => res.send(students))
    .catch(err => res.status(400).send(err))
})

router.post('', (req, res, next) => {
  Teachers.create(req.body)
    .then(teacher => res.send(teacher))
    .catch(err => res.status(400).send(err))
})

router.put('/:id', async (req, res, next) => {
  try {
    let teacher = await Teachers.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.send(teacher)
  } catch (err) {
    res.status(400).send(err)
  }
})

router.delete('/:id', (req, res, next) => {
  Teachers.findByIdAndDelete(req.params.id)
    .then(() => res.send('teacher is gone'))
    .catch(err => res.status(400).send(err))
})

module.exports = { router }