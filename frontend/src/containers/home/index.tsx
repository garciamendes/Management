// React
import React, { useState } from 'react'

// Components
import Header from '../../components/Header';
import CardHighligted, { cardVulnerabilitiesProps } from '../../components/CardHighligted';

// Styles
import {
  Container,
  HighlightedVulnerabilities,
} from './styles';

// interface HighlightedType {
//   HighVulne: cardVulnerabilitiesProps
// }

function Home() {
  const api = [
    { amount: 10, level: 'Strong', vulnerabilitySituation: 10.0 },
    { amount: 7, level: 'Serious', vulnerabilitySituation: 7.0 },
    { amount: 5, level: 'Reasonable', vulnerabilitySituation: 4.0 },
    { amount: 2, level: 'Low', vulnerabilitySituation: 2.0 },
  ]

  const [highlighted, setHighlighted] = useState<any>(api)

  return (
    <Container>
      <Header />
      <HighlightedVulnerabilities>
        {highlighted.map((content: any, index: any) => (
          <CardHighligted
            key={index}
            amount={content.amount}
            level={content.level}
            vulnerabilitySituation={content.vulnerabilitySituation}
          />
        ))}
      </HighlightedVulnerabilities>
    </Container>
  )
}

export default Home
