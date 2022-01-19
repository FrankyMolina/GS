import dotenv from 'dotenv'
import mongoose from 'mongoose'
import Phone from '../models/phones'
import { PhoneListType } from '../types/phone'
dotenv.config()
const { LOCALDB } = process.env

const phones: PhoneListType = [
  {
    name: 'iPhone 10',
    manufacturer: 'Apple',
    description: 'lorem ipsum dolor sit amet consectetur.',
    color: 'black',
    price: 1000,
    imageFileName: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-max-graphite-select?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1631652956000',
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
    imageFileName: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-max-graphite-select?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1631652956000',
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
    imageFileName: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-max-graphite-select?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1631652956000',
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
    imageFileName: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-max-graphite-select?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1631652956000',
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
    imageFileName: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-max-graphite-select?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1631652956000',
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
    imageFileName: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-max-graphite-select?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1631652956000',
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
