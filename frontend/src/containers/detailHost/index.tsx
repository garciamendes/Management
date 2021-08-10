// React
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { ReduxState } from '../../stores/types'
import { HostDetailState } from '../../stores/modules/detailHost/types'

// Third party
import { Table, Icon, Button, Popup } from 'semantic-ui-react'

// Components
import Header from '../../components/Header'

// Styles
import {
  Container,
  ContainerMain,
  ContainerHost,
  CurrentHost
} from './styles'

// Local
import { fetchHostDetailList } from '../../stores/modules/detailHost/actions'

export interface paramsProps {
  pk: string
  title?: string
}

function DetailHost() {
  const params: paramsProps = useParams()
  const dispatch = useDispatch()

  const [status, setStatus] = useState<number | string>()

  const hostDetail = useSelector<ReduxState, HostDetailState>(stores => stores.hostDetail)

  useEffect(() => {
    dispatch(fetchHostDetailList({ pk: params.pk }))
  }, [dispatch, params.pk])


  function handleStatusVulnerability(status: any) {
    const current_status = status
    console.log(current_status.status);

    if (current_status.status !== 1) {
      // setStatus(1)
      current_status.status = 1
    }
  }


  return (
    <Container>
      <Header />
      <ContainerMain>
        <ContainerHost>
          <CurrentHost>{params.title}</CurrentHost>
        </ContainerHost>
        <div style={{ marginBottom: '1%' }}>
          <Table striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Nome</Table.HeaderCell>
                <Table.HeaderCell>Gravidade</Table.HeaderCell>
                <Table.HeaderCell>Cvss</Table.HeaderCell>
                <Table.HeaderCell>Publicado</Table.HeaderCell>
                <Table.HeaderCell>Hosts afetados</Table.HeaderCell>
                <Table.HeaderCell>Corrigida</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {hostDetail.results.map(content => (
                <Table.Row key={content.vulnerability.id}>
                  <Table.Cell>{content.vulnerability.title}</Table.Cell>
                  <Table.Cell>{content.vulnerability.severity}</Table.Cell>
                  <Table.Cell>{content.vulnerability.cvss}</Table.Cell>
                  <Table.Cell>{content.vulnerability.publication_date}</Table.Cell>
                  <Table.Cell>{content.vulnerability.asset_count}</Table.Cell>
                  <Table.Cell>
                    {status === 1 ?
                      <Icon name='check' color={'green'} />
                      :
                      <Popup
                        content='Marcar como corrigida'
                        trigger={
                          <Button
                            icon='add'
                            basic
                            color={'green'}
                            onClick={
                              () => handleStatusVulnerability(content)
                            }
                          />
                        }
                      />
                    }
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </ContainerMain>
    </Container>
  )
}

export default DetailHost