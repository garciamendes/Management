// React
import React, { useState } from 'react'

// Local
import DemoImg from '../../../static/Images/log-in.svg'
import Logo from '../../../static/Images/logo.svg'
import EyeON from '../../../static/Images/eye-on.svg'
import EyeOff from '../../../static/Images/eye-off.svg'

// Styles
import {
  Container,
  SideContainer,
  ContainerImageDemo,
  Image,
  Input,
  Button,
  ImageEye
} from './styles'

// Const
import { COLORS } from '../../../styles/variables'

function Login() {
  const [showPassword, setShowPassword] = useState(false)

  function handleShowPassword() {
    setShowPassword(!showPassword)
  }

  function handleEnter() {

    alert('Funciona')
  }

  return (
    <Container>
      <SideContainer>
        <div className='container_side_secundary'>
          <Image
            size={'30'}
            src={Logo}
            alt='Logo'
          />
          <form className='form_login_user'>
            <Input type='text' placeholder='Username' />
            <div className='content_password_eye'>
              <Input type={`${showPassword ? 'type' : 'password'}`} placeholder='Password' />
              {showPassword ? (
                <ImageEye
                  size={'10'}
                  src={EyeOff}
                  alt='show password'
                  color={COLORS.BlackDark}
                  onClick={handleShowPassword}
                />
              ) : (
                <ImageEye
                  size={'10'}
                  src={EyeON}
                  alt='show password'
                  color={COLORS.BlackDark}
                  onClick={handleShowPassword}
                />
              )}
            </div>
          </form>
          <Button onClick={handleEnter}>
            Enter
          </Button>
        </div>
      </SideContainer>
      <ContainerImageDemo>
        <Image
          size={'45'}
          src={DemoImg}
          alt='Image demo'
        />
      </ContainerImageDemo>
    </Container>
  );
};

export default Login
