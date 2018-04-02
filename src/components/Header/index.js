import React from 'react'
import Link from 'gatsby-link'
import './header.css'

const Header = () => (
  <div>
    <header>
      <nav>
        <Link to="/" exact activeClassName="nav-itema">
          {' '}
          <li className="nav-item">Home</li>
        </Link>
        <Link to="/portfolio" exact activeClassName="nav-itema">
          <li className="nav-item">Portfolio</li>
        </Link>
        <Link to="/skills" exact activeClassName="nav-itema">
          <li className="nav-item">Skills</li>
        </Link>
        <Link to="/about" exact activeClassName="nav-itema">
          <li className="nav-item">About me</li>
        </Link>
      </nav>
    </header>

    <ul className="nav-bar">
      <li className="nav-i">
        <Link to="/" exact activeClassName="nav--i">
          Home
        </Link>
      </li>

      <li className="nav-i">
        <Link to="/portfolio" exact activeClassName="nav--i">
          Portfolio
        </Link>
      </li>

      <li className="nav-i">
        <Link to="/skills" exact activeClassName="nav--i">
          Skills
        </Link>
      </li>
      <li className="nav-i">
        <Link to="/about" exact activeClassName="nav--i">
          Aboutme
        </Link>
      </li>
    </ul>
  </div>
)

export default Header

//  <Link to="/portfolio" exact activeClassName="nav-i">
//         <li className="nav--i">Portfolio</li>
//         </Link>
//         <Link to="/skills" exact activeClassName="nav-i">
//       <li className="nav--i">About Me</li>
//      </Link>
