import dotenv from 'dotenv'
import mongoose from 'mongoose'
import Phone from '../models/phones'
import { PhoneList } from '../types/phone'
dotenv.config()
const { LOCALDB } = process.env

const phones: PhoneList = [
  {
    name: 'iPhone 10',
    manufacturer: 'Apple',
    description: 'lorem ipsum dolor sit amet consectetur.',
    color: 'black',
    price: 1000,
    imageFileName: 'IPhone_7.png',
    screen: '4,7 inch IPS',
    processor: 'A10 Fusion',
    ram: 2
  },
  {
    name: 'iPhone 7',
    manufacturer: 'Apple',
    description: 'lorem ipsum dolor sit amet consectetur.',
    color: 'black',
    price: 500,
    imageFileName: 'IPhone_7.png',
    screen: '4,7 inch IPS',
    processor: 'A10 Fusion',
    ram: 2
  },
  {
    name: 'iPhone 500',
    manufacturer: 'Apple',
    description: 'lorem ipsum dolor sit amet consectetur.',
    color: 'black',
    price: 10000000,
    imageFileName: 'IPhone_7.png',
    screen: '4,7 inch IPS',
    processor: 'A10 Fusion',
    ram: 2
  },
  {
    name: 'iPhone 11',
    manufacturer: 'Apple',
    description: 'lorem ipsum dolor sit amet consectetur.',
    color: 'black',
    price: 1000,
    imageFileName: 'IPhone_7.png',
    screen: '4,7 inch IPS',
    processor: 'A10 Fusion',
    ram: 2
  },
  {
    name: 'iPhone 45',
    manufacturer: 'Apple',
    description: 'lorem ipsum dolor sit amet consectetur.',
    color: 'black',
    price: 500,
    imageFileName: 'IPhone_7.png',
    screen: '4,7 inch IPS',
    processor: 'A10 Fusion',
    ram: 2
  },
  {
    name: 'iPhone 5',
    manufacturer: 'Apple',
    description: 'lorem ipsum dolor sit amet consectetur.',
    color: 'black',
    price: 1,
    imageFileName: 'IPhone_7.png',
    screen: '4,7 inch IPS',
    processor: 'A10 Fusion',
    ram: 2
  }
]

mongoose
  .connect(`${LOCALDB}`)
  .then(() => {
    console.log(`Connected to Mongo on ${LOCALDB}`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err)
  })

Phone.deleteMany()
  .then(() => {
    return Phone.create(phones)
  })
  .then(() => {
    console.log('succesfully added all the data')
    mongoose.connection.close()
    process.exit(0)
  })
