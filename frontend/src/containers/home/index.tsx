// React
import React, { useEffect, useState } from 'react'

// Components
import Header from '../../components/Header';

// Services
import { api } from '../../services/Api'

// Styles
import { Container } from './styles';

function Home() {

  const [list, setList] = useState([])

  useEffect(() => {
    api.get('/api/assets', {}).then((Response) => setList(Response.data));
  }, [])

  console.log(list);


  return (
    <Container>
      <Header />
      <ul>
        {list.map((content, index) => (
          <li key={index}>
            {content}
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default Home
