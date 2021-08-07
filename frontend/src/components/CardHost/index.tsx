// React
import React from 'react'

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
  return (
    <Container>
      <ContentTitle>
        <p>{hostname}</p>
      </ContentTitle>
      <ContentRisk>
        <ContentSubTitle>
          Risco:
          <ContentInfoTotal color={'#FF0000'}>{risk}</ContentInfoTotal>
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