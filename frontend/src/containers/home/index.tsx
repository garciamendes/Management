// React
import React, { useState } from 'react'

// Components
import Header from '../../components/Header';
import CardHighligted from '../../components/CardHighligted';
import CardGraphics from '../../components/CardGraphics';

// Styles
import {
  Container,
  HighlightedVulnerabilities,
  ScrollMaster,
} from './styles';

// interface HighlightedType {
//   HighVulne: cardVulnerabilitiesProps
// }

function Home() {

  const api = [
    { amount: 10, level: 'Critical', vulnerabilitySituation: 10.0 },
    { amount: 7, level: 'High', vulnerabilitySituation: 7.0 },
    { amount: 5, level: 'Medium', vulnerabilitySituation: 4.0 },
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
      <div className='container_graphics'>
        <ScrollMaster>
          <CardGraphics title='Monthly report' />
          <CardGraphics title='Annual reports' />
        </ScrollMaster>
      </div>
    </Container>
  )
}

export default Home
