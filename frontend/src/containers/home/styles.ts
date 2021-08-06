// Third party
import styled from 'styled-components'

// Consts
import { HeaderHeight } from '../../styles/variables'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - ${HeaderHeight.Height}px);
`

export const HighlightedVulnerabilities = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 20%;
`