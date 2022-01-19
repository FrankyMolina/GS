import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__btn">
        Phone list
      </Link>
      <Link to="/new-phone" className="navbar__btn">
        Create phone
      </Link>
    </nav>
  )
}
export default Navbar
