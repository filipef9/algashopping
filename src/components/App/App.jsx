import React, { useState } from 'react'
import Checkbox from '../../shared/Checkbox'
import LineChart from '../../shared/LineChart/LineChart'
import AppContainer from '../AppContainer/AppContainer'
import AppHeader from '../AppHeader'
import { Container, Wrapper } from './App.styles'

const App = () => {
  const [lettuce, setLettuce] = useState(true);
  const [healthy, setHealthy] = useState(20);

  const colors = ['#62cbc6', '#00abad', '#00b5bc', '#006073', '#004d61'];

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
          rightColumn={
            <div>
              estatísticas:
              <LineChart 
                title="Saudável"
                percentage={80}
                color={colors[0]}
              />
              <LineChart 
                title="Não tão saudável assim"
                percentage={20}
                color={colors[1]}
              />
              <LineChart 
                title="Limpeza"
                percentage={35}
                color={colors[2]}
              />
              <LineChart 
                title="Outros"
                percentage={15}
                color={colors[3]}
              />
            </div>}
        />
      </Container>
    </Wrapper>
  )
}

export default App