import { Link } from 'react-router-dom'
import { PhoneType } from '../../types/phones'
import './PhoneCard.scss'

const PhoneCard: React.FC<{ phone: PhoneType }> = ({ phone }) => {
  const { _id, imageFileName, manufacturer, name } = phone
  return (
    <div id={_id} className="phoneCard">
      <img src={`${imageFileName}`} alt="phone" />
      <div className="phoneCard__info">
        <h3>{name}</h3>
        <span>{manufacturer}</span>
        <Link to={`phones/${_id}`} className="phoneCard__btn">
          Phone details
        </Link>
      </div>
    </div>
  )
}
export default PhoneCard
