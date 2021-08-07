// React
import React from 'react'

// Styles
import {
  Container,
  AmountVulnerabilities,
  Level
} from './styles'

// Local
import { COLORS } from '../../styles/variables'

export interface cardVulnerabilitiesProps {
  amount: number
  level: string
  vulnerabilitySituation: number
}

function CardHighligted({ amount, level, vulnerabilitySituation }: cardVulnerabilitiesProps) {

  let LevelVulnerabilitiies = ''
  let colorLevelVulnerabilitiies = `${COLORS.GreenLight}`

  if (vulnerabilitySituation <= 3.9) {
    colorLevelVulnerabilitiies = `${COLORS.Gray}`
    LevelVulnerabilitiies = level
  }
  else if (vulnerabilitySituation <= 6.9) {
    colorLevelVulnerabilitiies = `${COLORS.Yellow}`
    LevelVulnerabilitiies = level
  }
  else if (vulnerabilitySituation < 9) {
    colorLevelVulnerabilitiies = `${COLORS.Red}`
    LevelVulnerabilitiies = level
  }
  else if (vulnerabilitySituation <= 10) {
    colorLevelVulnerabilitiies = `${COLORS.orange}`
    LevelVulnerabilitiies = level
  }

  return (
    <Container>
      <AmountVulnerabilities
        BorderColor={colorLevelVulnerabilitiies}
      >
        {amount}
      </AmountVulnerabilities>
      <Level>
        {LevelVulnerabilitiies}
      </Level>
    </Container>
  )
}

export default CardHighligted
