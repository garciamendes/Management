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
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleShowPassword() {
    setShowPassword(!showPassword)
  }

  async function handleEnter() {

    if (username.trim() === '' || password.trim() === '') {
      return (
        alert('Todos os campos são obrigatórios'),
        setUsername(''),
        setPassword('')
      )
    }

    alert("asd")
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
            <Input
              type='text'
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <div className='content_password_eye'>
              <Input
                type={`${showPassword ? 'type' : 'password'}`}
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
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
            Access
          </Button>
        </div>
      </SideContainer>
      <ContainerImageDemo>
        <Image
          size={'50'}
          src={DemoImg}
          alt='Image demo'
        />
      </ContainerImageDemo>
    </Container>
  );
};

export default Login
