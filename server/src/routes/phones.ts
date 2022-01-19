import * as express from 'express'
import Phone from '../models/phones'
import { PhoneType } from '../types/phone'

const router = express.Router()

router.get('/', (req, res) => {
  Phone.find()
    .then((PhonesList) => res.json(PhonesList))
    .catch((err) => console.log(err))
})

router.get('/:id', (req, res) => {
  Phone.findById(req.params.id)
    .then((phone) => res.json(phone))
    .catch((err) => console.log(err))
})

router.post('/new-phone', (req, res) => {
  const newPhone: PhoneType = {
    name: req.body.name,
    manufacturer: req.body.manufacturer,
    description: req.body.description,
    color: req.body.color,
    price: req.body.price,
    imageFileName: req.body.imageFileName,
    screen: req.body.screen,
    processor: req.body.processor,
    ram: req.body.ram
  }

  Phone.create(newPhone)
    .then((createPhone) => res.json(createPhone))
    .catch((err) => console.log(err))
})

router.put('/edit/:id', (req, res) => {
  const { id } = req.params
  const newPhone: PhoneType = {
    name: req.body.name,
    manufacturer: req.body.manufacturer,
    description: req.body.description,
    color: req.body.color,
    price: req.body.price,
    imageFileName: req.body.imageFileName,
    screen: req.body.screen,
    processor: req.body.processor,
    ram: req.body.ram
  }
  Phone.findByIdAndUpdate(id, { $set: newPhone })
    .then((updatedPhone) => res.json(updatedPhone))
    .catch((err) => console.log(err))
})

router.delete('/delete-phone/:id', (req, res) => {
  const { id } = req.params
  Phone.findByIdAndRemove(id)
    .then((deleted) => res.json(deleted))
    .catch((err) => console.log(err))
})

export default router
