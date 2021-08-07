// Third party
import styled from 'styled-components'

// Consts
import { COLORS } from '../../styles/variables'

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 1%;
  width: 30%;
  border-radius: 14px;
  filter: drop-shadow(0px 0px 7px rgba(0, 0, 0, 0.1));
  background-color: ${COLORS.White};

  .content_sub_title {
    width: 100%;
    font-size: 18px;

    .content_info_total {
      font-size: 16px;
      padding: 2% 4%;
      margin-left: 2%;
      border-radius: 10px;
      color: ${(props) => props.color ?? COLORS.BlackDark};
      background-color: ${COLORS.Gray};
    }
  }
`

export const ContentTitle = styled.div`
  display: flex;
  
  p {
    font-size: 20px;
    font-weight: 500;
    color: ${COLORS.BlackDark};
  }
`

export const ContentRisk = styled.div`
  display: flex;
`

export const TotalVulnerability = styled.div`
  display: flex;
`

export const ContentSubTitle = styled.span`
  width: 100%;
  font-size: 18px;
`

export const ContentInfoTotal = styled.span`
  font-size: 16px;
  padding: 2% 4%;
  margin-left: 2%;
  border-radius: 10px;
  color: ${(props) => props.color ?? COLORS.BlackDark};
  background-color: ${COLORS.Gray};
`