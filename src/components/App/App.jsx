import React from 'react'
import AppContainer from '../AppContainer/AppContainer'
import AppHeader from '../AppHeader'
import { Container, Wrapper } from './App.styles'

const App = () => {
  return (
    <Wrapper>
      <Container>
        <AppHeader />
        <AppContainer
          leftColumn={<div style={{ backgroundColor: 'red'}}>produtos disponíveis</div>}
          middleColumn={<div style={{ backgroundColor: 'green'}}>sua lista de compras</div>}
          rightColumn={<div style={{ backgroundColor: 'blue'}}>estatísticas</div>}
        />
      </Container>
    </Wrapper>
  )
}

export default App