// Third party
import styled from 'styled-components'

// Consts
import { COLORS } from '../../styles/variables'

interface BgColorProps {
  bgColor?: string
}

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 1%;
  width: 30%;
  border-radius: 14px;
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

export const ContentInfoTotal = styled.span<BgColorProps>`
  font-size: 16px;
  padding: 2% 4%;
  margin-left: 2%;
  border-radius: 10px;
  color: ${COLORS.White};
  background-color: ${(props) => props.bgColor ?? COLORS.BlackDark};
`