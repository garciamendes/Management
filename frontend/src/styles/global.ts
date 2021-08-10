// Third party
import styled, { createGlobalStyle } from 'styled-components'

// Local
import { COLORS } from './variables'

interface ScrollMasterProps {
  flexDirection?: string
  flexWrap?: string
  justifyContent?: string
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', Tahoma, Geneva, Verdana, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscal;

    outline: none;
    list-style: none;
    text-decoration: none;
  }

  html, body, #root {
    height: 100%;
    background-color: ${COLORS.Background};
  }

  img {
    object-fit: cover;
  }

`
export const ScrollMaster = styled.div<ScrollMasterProps>`
  overflow-y: auto;
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  flex-wrap: ${(props) => props.flexWrap};
  justify-content: ${(props) => props.justifyContent};
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