// React
import React, { useState } from 'react'

// Components
import Header from '../../components/Header'
import CardHighligted from '../../components/CardHighligted'
import CardGraphics from '../../components/CardGraphics'

// Styles
import {
  Container,
  HighlightedVulnerabilities,
} from './styles'

// Local
import { ScrollMaster } from '../../styles/global'

function Home() {

  const api = [
    { amount: 1000, level: 'Critical', vulnerabilitySituation: 10.0 },
    { amount: 790, level: 'High', vulnerabilitySituation: 7.0 },
    { amount: 520, level: 'Medium', vulnerabilitySituation: 4.0 },
    { amount: 2000, level: 'Low', vulnerabilitySituation: 2.0 },
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
        <ScrollMaster flexDirection={'column'}>
          <CardGraphics title='Monthly report' />
          <CardGraphics title='Annual reports' />
        </ScrollMaster>
      </div>
    </Container>
  )
}

export default Home
