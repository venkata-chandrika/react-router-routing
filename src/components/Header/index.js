// Write your JS code here
import './index.css'

import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="nav-bar-container">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo"
      />
      <p className="wave">Wave</p>
    </div>
    <ul className="list-container">
      <li>
        <Link to="/" className="list">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="list">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="list">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
