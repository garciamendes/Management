// React
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

// Styles
import { Container, Avatar } from './styles'

// Local
import SignOut from '../../static/Images/sign-out.svg'
import NoImage from '../../static/Images/no-image.png'

function Header() {

  const [isActive, setIsActive] = useState<boolean>(false)

  function handleShowMenu() {
    setIsActive(!isActive)
  }

  return (
    <Container>
      <Avatar src={NoImage} alt='Avatar' />
      <nav className='navbar'>
        <ul className={`nav-menu ${isActive ? 'active' : ''}`}>
          <li className='nav-item'>
            <Link to='#' className='nav-link'>Hosts</Link>
          </li>
          <li className='nav-item'>
            <Link to='#' className='nav-link'>Vulnerabilities</Link>
          </li>
          <li className='nav-item'>
            <Link to='#' className='nav-link'>Admin</Link>
          </li>
          <li className='nav-item'>
            <img className='sign_out' src={SignOut} alt='Sign out application' />
          </li>
        </ul>
        <div
          className={`hamburger ${isActive ? 'active' : ''}`}
          onClick={handleShowMenu}
        >
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
      </nav>
    </Container>
  );
};

export default Header
