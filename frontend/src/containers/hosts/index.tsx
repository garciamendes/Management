// React
import React, { useState } from 'react'

// Components
import Header from '../../components/Header'
import CardHost from '../../components/CardHost'

// Styles
import {
  Container,
  ContainerMain,
  TotalHosts
} from './styles'

// Local
import { ScrollMaster } from '../../styles/global'

function Hosts() {

  const api = [
    { id: 1, hostname: "WORKSTATION-1", risk: 10.0, count_vulnerability: 29 },
    { id: 2, hostname: "WORKSTATION-1", risk: 10.0, count_vulnerability: 29 },
    { id: 3, hostname: "WORKSTATION-1", risk: 10.0, count_vulnerability: 29 },
    { id: 4, hostname: "WORKSTATION-1", risk: 10.0, count_vulnerability: 29 },
    { id: 5, hostname: "WORKSTATION-1", risk: 10.0, count_vulnerability: 29 },
    { id: 6, hostname: "WORKSTATION-1", risk: 10.0, count_vulnerability: 29 },
    { id: 7, hostname: "WORKSTATION-1", risk: 10.0, count_vulnerability: 29 },
    { id: 8, hostname: "WORKSTATION-1", risk: 10.0, count_vulnerability: 29 },
    { id: 9, hostname: "WORKSTATION-1", risk: 10.0, count_vulnerability: 29 },
    { id: 10, hostname: "WORKSTATION-1", risk: 10.0, count_vulnerability: 29 },
    { id: 10, hostname: "WORKSTATION-1", risk: 10.0, count_vulnerability: 29 },
    { id: 10, hostname: "WORKSTATION-1", risk: 10.0, count_vulnerability: 29 },
    { id: 10, hostname: "WORKSTATION-1", risk: 10.0, count_vulnerability: 29 },
    { id: 10, hostname: "WORKSTATION-1", risk: 10.0, count_vulnerability: 29 },
    { id: 10, hostname: "WORKSTATION-1", risk: 10.0, count_vulnerability: 29 },
  ]

  const [listhost, setListhost] = useState(api)

  return (
    <Container>
      <Header />
      <ContainerMain>
        <TotalHosts>
          <span>Total: {listhost.length}</span>
        </TotalHosts>
        <div className='content_hosts'>
          <ScrollMaster
            flexWrap={'wrap'}
            justifyContent={'center'}
          >
            {listhost.map(content => (
              <CardHost
                key={content.id}
                hostname={content.hostname}
                risk={content.risk}
                count_vulnerability={content.count_vulnerability}
              />
            ))}
          </ScrollMaster>
        </div>
      </ContainerMain>
    </Container>
  )
}

export default Hosts