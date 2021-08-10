// React
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

// Redux
import { useDispatch, useSelector } from 'react-redux'

// Third party
import { Table, Button, Popup } from 'semantic-ui-react'

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
import {
  fetchHostDetailList,
  updateStatusVulnerability
} from '../../stores/modules/detailHost/actions'
import { ReduxState } from '../../stores/types'
import { HostDetailState } from '../../stores/modules/detailHost/types'

export interface paramsProps {
  pk: string
  title?: string
}

export interface statusProps {
  current_status: number | string
  vuln_pk: number | string
}

function DetailHost() {
  const params: paramsProps = useParams()
  const dispatch = useDispatch()

  const hostDetail = useSelector<ReduxState, HostDetailState>(stores => stores.hostDetail)

  useEffect(() => {
    dispatch(fetchHostDetailList({ pk: params.pk }))
  }, [dispatch, params.pk])

  function handleUpdateStatus({ current_status, vuln_pk }: statusProps) {
    dispatch(updateStatusVulnerability({
      vuln_pk: vuln_pk,
      asset_pk: params.pk,
      body: current_status === 1 ? 0 : 1
    }))
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
                <Table.HeaderCell></Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {hostDetail.results.map((content, index) => (
                <Table.Row key={index}>
                  <Table.Cell>{content.vulnerability.title}</Table.Cell>
                  <Table.Cell>{content.vulnerability.severity}</Table.Cell>
                  <Table.Cell>{content.vulnerability.cvss}</Table.Cell>
                  <Table.Cell>{content.vulnerability.publication_date}</Table.Cell>
                  <Table.Cell>{content.vulnerability.asset_count}</Table.Cell>
                  <Table.Cell>{content.status === 1 ? 'Sim' : 'Não'}</Table.Cell>
                  <Table.Cell>
                    {content.status !== 1 ?
                      <Popup
                        content='Marcar como corrigida'
                        trigger={
                          <Button
                            icon='check'
                            onClick={() => {
                              handleUpdateStatus({
                                current_status: content.status,
                                vuln_pk: content.vulnerability.id
                              })
                            }}
                          />
                        }
                      />
                      :
                      <Popup
                        content='Marcar como não corrigida'
                        trigger={
                          <Button
                            icon='close'
                            onClick={() => {
                              handleUpdateStatus({
                                current_status: content.status,
                                vuln_pk: content.vulnerability.id
                              })
                            }}
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