// React
import React, { useState } from 'react'

// Components
import Header from '../../components/Header'
import TotalVulnerabilities, { cardVulnerabilitiesProps } from '../../components/CardTotalVulnerabilities'
import CardGraphics from '../../components/CardGraphics'

// Styles
import {
  Container,
  ContainerTotalVulnerabilities,
} from './styles'

// Local
import { ScrollMaster } from '../../styles/global'

function Dashboard() {

  const api = [
    { amount: 1000, severity: 'Critica', cvss: 10.0 },
    { amount: 790, severity: 'Alta', cvss: 7.0 },
    { amount: 520, severity: 'Médio', cvss: 4.0 },
    { amount: 2000, severity: 'Baixa', cvss: 2.0 },
  ]

  const [totalVulns, settotalVulns] = useState(api)

  return (
    <Container>
      <Header />
      <ContainerTotalVulnerabilities>
        {totalVulns.map((content: cardVulnerabilitiesProps, index: number) => (
          <TotalVulnerabilities
            key={index}
            amount={content.amount}
            severity={content.severity}
            cvss={content.cvss}
          />
        ))}
      </ContainerTotalVulnerabilities>
      <div className='container_graphics'>
        <ScrollMaster flexDirection={'column'}>
          <CardGraphics title='Monthly report' />
          <CardGraphics title='Annual reports' />
        </ScrollMaster>
      </div>
    </Container>
  )
}

export default Dashboard