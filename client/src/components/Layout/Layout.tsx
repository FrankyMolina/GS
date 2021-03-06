import Navbar from '../Navbar'
import './Layout.scss'

const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="layoutContainer">
      <Navbar />
      <main>{children}</main>
    </div>
  )
}
export default Layout
