// Third party
import styled from 'styled-components'

// Const
import { COLORS, HeaderHeight } from '../../styles/variables';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding-right: 1%;
  height: ${HeaderHeight.Height}px;
  background-color: ${COLORS.GreenLight};

  .sign_out {
    cursor: pointer;
    height: 20px;
    width: 20px;
  }
`

export const Avatar = styled.img`
  cursor: no-drop;
  height: 40px;
  width: 40px;
  border-radius: 50%;
`