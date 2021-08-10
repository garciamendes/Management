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
  cvss: number
  total_vunerabilities: number
  click: () => void
}

function CardHost({ hostname, cvss, total_vunerabilities, click }: CardHostProps) {

  let colorLevelVulnerabilitiies = `${COLORS.GreenLight}`

  if (cvss <= 3.9) {
    colorLevelVulnerabilitiies = `${COLORS.Gray}`
  }
  else if (cvss <= 6.9) {
    colorLevelVulnerabilitiies = `${COLORS.Yellow}`
  }
  else if (cvss < 9) {
    colorLevelVulnerabilitiies = `${COLORS.Red}`
  }
  else if (cvss <= 10) {
    colorLevelVulnerabilitiies = `${COLORS.orange}`
  }

  return (
    <Container onClick={click}>
      <ContentTitle>
        <p>{hostname}</p>
      </ContentTitle>
      <ContentRisk>
        <ContentSubTitle>
          Risco:
          <ContentInfoTotal bgColor={colorLevelVulnerabilitiies}>{cvss}</ContentInfoTotal>
        </ContentSubTitle>
      </ContentRisk>
      <TotalVulnerability>
        <ContentSubTitle>
          Total de vulnerabilidades:
          <ContentInfoTotal>{total_vunerabilities}</ContentInfoTotal>
        </ContentSubTitle>
      </TotalVulnerability>
    </Container>
  )
}

export default CardHost