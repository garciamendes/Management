// Third party
import styled from 'styled-components'

// Const
import { COLORS } from '../../../styles/variables'

interface ImageProps {
  size: string,
}

export const Container = styled.div`
  display: flex;
  height: 100%;
`

export const SideContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 40%;
  background: ${COLORS.White};
  box-shadow: 1px 0px 20px rgba(0, 0, 0, 0.12);
  border-radius: 0px 50px 50px 0px;

  .container_side_secundary {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 7px;
    max-width: 50%;
  }

  .form_login_user {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    height: 40%;
    width: 100%;

    .content_password_eye {
      position: relative;
      width: 100%;
    }
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 4% 3%;
  font-size: 18px;
  border: none;
  background: ${COLORS.BackgroundInput};
  border-radius: 5px;
`

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 4% 0;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  color: ${COLORS.White};
  background-color: ${COLORS.GreenLight};
  transition: .24s;

  &:hover {
    filter: grayscale(30%);
  }
`

export const ContainerImageDemo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 60%;
`

export const Image = styled.img<ImageProps>`
  width: ${(props) => props.size}%;
`

export const ImageEye = styled.img<ImageProps>`
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
  width: ${(props) => props.size}%;
`
