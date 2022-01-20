import { getPhoneDetails, deletePhone } from '../../api/phones'
import { useEffect, useState } from 'react'
import { PhoneType } from '../../types/phones'
import { useParams, Link } from 'react-router-dom'
import { Watch } from 'react-loader-spinner'
import './PhoneDetails.scss'

const PhoneDetails: React.FC = () => {
  const [phoneData, setPhoneData] = useState<PhoneType | null>(null)
  const [deleted, setDeleted] = useState(false)
  const { id } = useParams()
  useEffect(() => {
    if (id) {
      getPhoneDetails(id).then((phone) => {
        if (phone) {
          setPhoneData(phone)
        }
      })
    }
  }, [id])

  if (!phoneData) return <Watch color="lightblue" />

  const {
    color,
    description,
    imageFileName,
    manufacturer,
    name,
    price,
    processor,
    ram,
    screen
  } = phoneData

  const onClickDelete = () => {
    if (id) {
      deletePhone(id)
      setDeleted(true)
    }
  }

  return (
    <div className="phoneDetails" data-testid="phoneDetailsTest">
      <img src={imageFileName} alt="phone" />
      <h3>{name}</h3>
      <ul>
        <li>{description}</li>
        <li>{manufacturer}</li>
        <li>{color}</li>
        <li>{price}</li>
        <li>{processor}</li>
        <li>{ram}</li>
        <li>{screen}</li>
      </ul>

      <div className="phoneDetails__btnsContainer">
        <Link to={`/phones/edit/${id}`} className="phoneDetails__btn">
          edit phone
        </Link>
        {deleted ? (
          <div className="phoneDetails__deleted" data-testid="deleteBtnSuccess">
            Deleted!
          </div>
        ) : (
          <button
            onClick={onClickDelete}
            className="phoneDetails__btn"
            data-testid="DeleteBtnTest"
          >
            Delete phone
          </button>
        )}
      </div>
    </div>
  )
}
export default PhoneDetails
