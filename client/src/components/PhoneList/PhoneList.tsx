import { useEffect, useState } from 'react'
import { getPhones } from '../../api/phones'
import { PhoneListType } from '../../types/phones'
import PhoneCard from '../PhoneCard'
import { Watch } from 'react-loader-spinner'
import './PhoneList.scss'

const PhoneList: React.FC = () => {
  const [phoneList, setPhoneList] = useState<PhoneListType>([])
  useEffect(() => {
    getPhones().then((collection) => {
      if (collection) {
        setPhoneList(collection)
      }
    })
  }, [])

  if (!phoneList.length) return <Watch color="lightblue" />

  return (
    <div className="phoneList">
      {phoneList.map((phone) => {
        return <PhoneCard phone={phone} key={phone._id} />
      })}
    </div>
  )
}
export default PhoneList
