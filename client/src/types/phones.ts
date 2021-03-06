export type PhoneType = {
  _id?: string
  name: string
  manufacturer: string
  description: string
  color: string
  price: number
  imageFileName: string
  screen: string
  processor: string
  ram: number
  __v?: number
}

export type PhoneListType = PhoneType[]
