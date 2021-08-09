// React
import React from 'react'

// Local
import { COLORS } from '../../styles/variables'

// Styles
import {
  Container,
  ContentTitle,
  ContentRisk,
  TotalVulnerability,
  ContentSubTitle,
  ContentInfoTotal,
} from './styles'

export interface CardHostProps {
  hostname: string
  risk: number
  count_vulnerability: number
}

function CardHost({ hostname, risk, count_vulnerability }: CardHostProps) {

  let colorLevelVulnerabilitiies = `${COLORS.GreenLight}`

  if (risk <= 3.9) {
    colorLevelVulnerabilitiies = `${COLORS.Gray}`
  }
  else if (risk <= 6.9) {
    colorLevelVulnerabilitiies = `${COLORS.Yellow}`
  }
  else if (risk < 9) {
    colorLevelVulnerabilitiies = `${COLORS.Red}`
  }
  else if (risk <= 10) {
    colorLevelVulnerabilitiies = `${COLORS.orange}`
  }

  return (
    <Container>
      <ContentTitle>
        <p>{hostname}</p>
      </ContentTitle>
      <ContentRisk>
        <ContentSubTitle>
          Risco:
          <ContentInfoTotal bgColor={colorLevelVulnerabilitiies}>{risk}</ContentInfoTotal>
        </ContentSubTitle>
      </ContentRisk>
      <TotalVulnerability>
        <ContentSubTitle>
          Total de vulnerabilidades:
          <ContentInfoTotal>{count_vulnerability}</ContentInfoTotal>
        </ContentSubTitle>
      </TotalVulnerability>
    </Container>
  )
}

export default CardHost