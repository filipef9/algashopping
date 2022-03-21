import React, { useState } from 'react'
import Checkbox from '../../shared/Checkbox'
import AppContainer from '../AppContainer/AppContainer'
import AppHeader from '../AppHeader'
import { Container, Wrapper } from './App.styles'

const App = () => {
  const [lettuce, setLettuce] = useState(true);

  return (
    <Wrapper>
      <Container>
        <AppHeader />
        <AppContainer
          leftColumn={
            <div>
              produtos disponíveis:
              <Checkbox title="Alface" value={lettuce} onClick={() => setLettuce(!lettuce)} />
              <Checkbox title="Arroz" value={false} />
            </div>}
          middleColumn={
            <div>
              sua lista de compras:
            </div>}
          rightColumn={<div>estatísticas:</div>}
        />
      </Container>
    </Wrapper>
  )
}

export default App