import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { PhoneType } from '../../types/phones'
import { createNewPhone, editPhone, getPhoneDetails } from '../../api/phones'
import './PhoneForm.scss'
import { Watch } from 'react-loader-spinner'

const EMPTY_STATE = {
  name: '',
  manufacturer: '',
  description: '',
  color: '',
  price: 0,
  imageFileName: '',
  screen: '',
  processor: '',
  ram: 0
}

const PhoneForm: React.FC = () => {
  const { id } = useParams()
  const location = useLocation()
  const [formData, setFormData] = useState<PhoneType>(EMPTY_STATE)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (id) {
      getPhoneDetails(id).then((phone) => {
        if (phone) {
          setFormData(phone)
        }
      })
    }
    return setFormData(EMPTY_STATE)
  }, [location.pathname, id])

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault()
    setLoading(true)
    if (id) {
      editPhone(id, formData as PhoneType).then((isPhoneUpdated) => {
        if (isPhoneUpdated) {
          setLoading(false)
          setSubmitted(true)
        }
      })
    }
    if (!id) {
      createNewPhone(formData as PhoneType).then((phoneCreated) => {
        if (phoneCreated) {
          setLoading(false)
          setSubmitted(true)
        }
      })
    }
  }

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = ev.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  }

  const inputAttributes = (Object.keys(formData) as (keyof PhoneType)[]).filter(
    (key) => key !== '__v' && key !== '_id'
  )
  return loading ? (
    <Watch color="lightblue" />
  ) : (
    <div className="phoneForm">
      <form onSubmit={handleSubmit}>
        {inputAttributes.map((attr) => (
          <label htmlFor={attr} key={attr} className="phoneForm__label">
            {`${attr === 'imageFileName' ? 'Image URL' : attr}:`}

            <input
              type={attr === 'price' || attr === 'ram' ? 'number' : 'text'}
              name={attr}
              value={formData[attr]}
              onChange={handleChange}
            />
          </label>
        ))}

        {submitted ? (
          <div className="phoneForm__submitted">Done!</div>
        ) : (
          <input
            type="submit"
            value={id ? 'Edit' : 'Create new phone'}
            className="phoneForm__btn"
          />
        )}
      </form>
    </div>
  )
}
export default PhoneForm
