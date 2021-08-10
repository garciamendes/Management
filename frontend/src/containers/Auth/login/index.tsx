// React
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

// Redux
import { useDispatch } from 'react-redux'
import { fetchAuth } from '../../../stores/modules/auth/actions'

// Third party
import toast from 'react-hot-toast'

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
  const history = useHistory()
  const dispatch = useDispatch()

  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleShowPassword() {
    setShowPassword(!showPassword)
  }

  function handlePressKey(event: any) {
    if (event.key === 'Enter') {
      handleEnter()
    }
  }

  async function handleEnter() {

    if (username.trim() === '' || password.trim() === '') {
      return (
        toast.error('Todos os campos são obrigatórios'),
        setUsername(''),
        setPassword('')
      )
    }

    dispatch(fetchAuth({ username: username, password: password }, () => {
      history.push('/dashboard')
    }))
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
              placeholder='Nome de usuário'
              value={username}
              onKeyPress={handlePressKey}
              onChange={(e) => setUsername(e.target.value)}
            />
            <div className='content_password_eye'>
              <Input
                type={`${showPassword ? 'type' : 'password'}`}
                placeholder='Senha'
                value={password}
                onKeyPress={handlePressKey}
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
            Acesar
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
