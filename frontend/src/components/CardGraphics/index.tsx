// React
import React from 'react'

// Styles
import { Container } from './styles'

// Components
import Graphic from '../Graphic'

interface GraphicsProps {
  title?: string;
}

function CardGraphics({ title }: GraphicsProps) {
  return (
    <Container>
      {title}
      <Graphic />
    </Container>
  )
}

export default CardGraphics
