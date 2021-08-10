// Third party
import styled from 'styled-components'

// Consts
import { COLORS } from '../../styles/variables'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 90%;
`

export const ContainerHost = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1% 0;
`

export const CurrentHost = styled.span`
  font-size: 18px;
  padding: 1% 2%;
  border-radius: 14px;
  background-color: ${COLORS.Gray};
`