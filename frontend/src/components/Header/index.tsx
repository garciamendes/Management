// React
import React from 'react'

// Styles
import { Container, Avatar } from './styles'

// Local
import SignOut from '../../static/Images/sign-out.svg'
import NoImage from '../../static/Images/no-image.png'

function Header() {
  return (
    <Container>
      <Avatar src={NoImage} alt='Avatar' />
      <img className='sign_out' src={SignOut} alt='Sign out application' />
    </Container>
  );
};

export default Header
