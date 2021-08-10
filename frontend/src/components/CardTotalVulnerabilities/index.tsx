// React
import React from 'react'

// Styles
import {
  Container,
  NumberOfVulnerabilities,
  Severity
} from './styles'

// Local
import { COLORS } from '../../styles/variables'

export interface cardVulnerabilitiesProps {
  amount: number
  severity: string
  cvss: number
}

function TotalVulnerabilities({ amount, severity, cvss }: cardVulnerabilitiesProps) {

  let severityVulnerabilitiies = ''
  let colorSeverityVulnerabilities = `${COLORS.GreenLight}`

  if (cvss <= 3.9) {
    colorSeverityVulnerabilities = `${COLORS.Gray}`
    severityVulnerabilitiies = severity
  }
  else if (cvss <= 6.9) {
    colorSeverityVulnerabilities = `${COLORS.Yellow}`
    severityVulnerabilitiies = severity
  }
  else if (cvss < 9) {
    colorSeverityVulnerabilities = `${COLORS.Red}`
    severityVulnerabilitiies = severity
  }
  else if (cvss <= 10) {
    colorSeverityVulnerabilities = `${COLORS.orange}`
    severityVulnerabilitiies = severity
  }

  return (
    <Container>
      <NumberOfVulnerabilities
        BorderColor={colorSeverityVulnerabilities}
      >
        {amount}
      </NumberOfVulnerabilities>
      <Severity>
        {severityVulnerabilitiies}
      </Severity>
    </Container>
  )
}

export default TotalVulnerabilities
