// Third party
import styled from 'styled-components'

// Consts
import { COLORS, HeaderHeight } from '../../styles/variables'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  /* height: calc(100% - ${HeaderHeight.Height}px); */

  .container_graphics {
    overflow: hidden;
    flex: 1;
  }
`

export const HighlightedVulnerabilities = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 20%;
`

export const ScrollMaster = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 1% 0;
  height: 100%;
  width: 100%;

  ::-webkit-scrollbar {
    height: 7px;
    width: 7px;
    border-radius: 20px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${COLORS.GreenLight};
    border-radius: 20px;
  }
`