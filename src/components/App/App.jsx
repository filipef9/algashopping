import React, { useEffect, useState } from 'react'
import LineChart from '../../shared/LineChart'
import AppContainer from '../AppContainer'
import AppHeader from '../AppHeader'
import ShoppingList from '../ShoppingList'
import { Container, Wrapper } from './App.styles'
import productsMock from '../../mocks/productsList.json';

const App = () => {
  const colors = ['#62cbc6', '#00abad', '#00b5bc', '#006073', '#004d61'];

  const [products, setProducts] = useState(productsMock.products);
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    const selectedProductsUpdated = products.filter(product => product.checked);
    setSelectedProducts(selectedProductsUpdated);
  }, [products]);

  const handleOnToggle = (productId) => {
    const productsUpdated = [...products];
    const productIndex = productsUpdated.findIndex(product => product.id === productId);

    const productToUpdateFound = productIndex || productIndex >= 0;
    if (productToUpdateFound) {
      const productToUpdate = productsUpdated[productIndex];
      productsUpdated[productIndex] = {
        ...productToUpdate,
        checked: !productToUpdate.checked
      }

      setProducts(productsUpdated);

    }
  };

  return (
    <Wrapper>
      <Container>
        <AppHeader />
        <AppContainer
          leftColumn={
            <ShoppingList 
              title="Produtos disponíveis"
              products={products}
              onToggle={handleOnToggle}
            />
          }
          middleColumn={
            <ShoppingList 
              title="Sua lista de compras" 
              products={selectedProducts}
              onToggle={handleOnToggle}
            />
          }
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