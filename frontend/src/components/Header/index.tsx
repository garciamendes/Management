// React
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';

// Styles
import { Container, Avatar } from './styles'

// Local
import SignOut from '../../static/Images/sign-out.svg'
import NoImage from '../../static/Images/no-image.png'

function Header() {
  const history = useHistory()

  const [isActive, setIsActive] = useState<boolean>(false)

  function handleShowMenu() {
    setIsActive(!isActive)
  }

  function handleLogout() {
    localStorage.removeItem('token')
    history.push('/')
  }

  return (
    <Container>
      <Avatar src={NoImage} alt='Avatar' />
      <nav className='navbar'>
        <ul className={`nav-menu ${isActive ? 'active' : ''}`}>
          <li className='nav-item'>
            <Link to='/dashboard' className='nav-link'>Dashboard</Link>
          </li>
          <li className='nav-item'>
            <Link to='/hosts' className='nav-link'>Hosts</Link>
          </li>
          <li className='nav-item'>
            <Link to='/vulnerabilities/' className='nav-link'>Vunerabilidades</Link>
          </li>
          <li className='nav-item'>
            <div onClick={handleLogout} className='content_logout'>
              <img className='sign_out' src={SignOut} alt='Sign out application' />
              <span>Sair</span>
            </div>
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
