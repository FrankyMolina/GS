import { PhoneListType, PhoneType } from '../types/phones'
const APIURL = process.env.REACT_APP_API_URL

export async function getPhones() {
  try {
    const response = await fetch(`${APIURL}/phones`)
    const phones = await response.json()
    return phones as PhoneListType
  } catch (err: any) {
    console.error(err.message)
  }
}
export async function getPhoneDetails(id: string) {
  try {
    const response = await fetch(`${APIURL}/phones/${id}`)
    const phone = await response.json()
    return phone as PhoneType
  } catch (err: any) {
    console.error(err.message)
  }
}
export async function createNewPhone(newPhone: PhoneType) {
  try {
    const response = await fetch(`${APIURL}/phones/new-phone`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPhone)
    })
    return true
  } catch (err: any) {
    console.error(err.message)
  }
}
export async function editPhone(id: string, newPhoneData: PhoneType) {
  const bodyJSON = JSON.stringify(newPhoneData)
  console.log(bodyJSON)

  try {
    const response = await fetch(`${APIURL}/phones/edit/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: bodyJSON
    })
    return true
  } catch (err: any) {
    console.error(err.message)
  }
}
export async function deletePhone(id: string) {
  try {
    const response = await fetch(`${APIURL}/phones/delete-phone/${id}`, {
      method: 'DELETE'
    })
    const phone = await response.json()
    return phone as PhoneType
  } catch (err: any) {
    console.error(err.message)
  }
}
