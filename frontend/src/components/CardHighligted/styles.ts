// Third party
import styled from 'styled-components';

// Consts
import { COLORS } from '../../styles/variables';

interface BorderColorProps {
  BorderColor: string
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 20%;
  height: 65%;
  padding-left: 2%;
  border: none;
  border-radius: 14px;
  box-shadow: 0px 0px 10px rgba(51, 51, 51, 0.1);
  background: ${COLORS.White};
`

export const AmountVulnerabilities = styled.div<BorderColorProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 68%;
  width: 25%;
  border-radius: 50%;
  font-size: 18px;
  font-weight: 500;
  color: ${COLORS.BlackDark};
  border: 3px solid ${(props) => props.BorderColor};
`

export const Level = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: ${COLORS.BlackDark};
`
