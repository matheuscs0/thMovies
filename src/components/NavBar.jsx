import {BsFillChatFill} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <div>
      <nav className="navBar">
          <div className="title">
            <h2><Link to="/">
            TH <span>MOVIES</span></Link>
            </h2>  
          </div>

          <div className='icons'>
            <BsFillChatFill className='icon'/>
            <GiHamburgerMenu className='icon'/>
          </div>
      </nav>
    </div>
  )
}

export default NavBar