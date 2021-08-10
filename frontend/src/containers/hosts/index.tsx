// React
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

// Redux
import { useDispatch, useSelector } from 'react-redux'

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
import { ReduxState } from '../../stores/types'
import { HostsState } from '../../stores/modules/assets/types'
import { fetchHostsList } from '../../stores/modules/assets/actions'

function Hosts() {
  const history = useHistory()
  const dispatch = useDispatch()

  const hosts = useSelector<ReduxState, HostsState>(stores => stores.hosts)

  useEffect(() => {
    dispatch(fetchHostsList())
  }, [dispatch])

  function handleDetailHost(id: any, title: any) {
    history.push(`/host/${id}/${title}`)
  }

  return (
    <Container>
      <Header />
      <ContainerMain>
        <TotalHosts>
          <span>Total: {hosts.results.length}</span>
        </TotalHosts>
        <div className='content_hosts'>
          <ScrollMaster
            flexWrap={'wrap'}
            justifyContent={'center'}
          >
            {hosts.results.length <= 0 ? (
              <h3>Nada foi encontrado</h3>
            ) : (
              hosts.results.map(content => (
                <CardHost
                  click={() => handleDetailHost(content.id, content.hostname)}
                  key={content.id}
                  hostname={content.hostname}
                  cvss={content.risk}
                  total_vunerabilities={content.vuln_count}
                />
              ))
            )}
          </ScrollMaster>
        </div>
      </ContainerMain>
    </Container>
  )
}

export default Hosts