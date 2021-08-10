// Third party
import styled from 'styled-components'

// Consts
import { COLORS } from '../../styles/variables'

export const Container = styled.div`
  overflow: hidden;
  height: 100%;
  width: 100%;
`

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  width: 100%;
  max-width: 97%;
  margin-top: 1%;

  .content_hosts {
    overflow: hidden;
    display: flex;
    height: 82%;
  }
`

export const TotalHosts = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  
  span {
    font-size: 18px;
    font-weight: 500;
    color: ${COLORS.BlackDark};
  }
`