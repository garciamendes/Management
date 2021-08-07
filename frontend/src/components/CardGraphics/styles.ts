// Third party
import styled from 'styled-components'

// Consts
import { COLORS } from '../../styles/variables'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 80%;
  padding: 1% 0;
  border-radius: 14px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  background: ${COLORS.White};
`
