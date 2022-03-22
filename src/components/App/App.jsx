import React, { useEffect, useState } from 'react'
import LineChart from '../../shared/LineChart'
import AppContainer from '../AppContainer'
import AppHeader from '../AppHeader'
import ShoppingList from '../ShoppingList'
import { Container, Wrapper } from './App.styles'
import productsMock from '../../mocks/productsList.json';
import calculatePercentage from '../../utils/calculatePercentage'

const App = () => {
  const colors = ['#62cbc6', '#00abad', '#00b5bc', '#006073', '#004d61'];

  const [products, setProducts] = useState(productsMock.products);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const selectedProductsUpdated = products.filter(product => product.checked);
    setSelectedProducts(selectedProductsUpdated);
  }, [products]);

  useEffect(() => {
    const updatedTotalPrice = selectedProducts.reduce((sum, product) => sum + product.price, 0);
    setTotalPrice(updatedTotalPrice);
  }, [selectedProducts]);

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
                color={colors[0]}
                percentage={calculatePercentage(
                  selectedProducts.length,
                  selectedProducts.filter(product => product.tags.includes('healthy')).length
                )}
              />
              <LineChart 
                title="Não tão saudável assim"
                color={colors[1]}
                percentage={calculatePercentage(
                  selectedProducts.length,
                  selectedProducts.filter(product => product.tags.includes('junk')).length
                )}
              />
              <LineChart 
                title="Limpeza"
                color={colors[2]}
                percentage={calculatePercentage(
                  selectedProducts.length,
                  selectedProducts.filter(product => product.tags.includes('cleaning')).length
                )}
              />
              <LineChart 
                title="Outros"
                color={colors[3]}
                percentage={calculatePercentage(
                  selectedProducts.length,
                  selectedProducts.filter(product => product.tags.includes('others')).length
                )}
              />

              <div style={{ marginTop: 12 }}>
                  <h2
                    style={{ fontWeight: 400, fontSize: 12, color: '#00364a' }}
                  >previsão de gastos:</h2>
                  <span style={{ fontSize: 24 }}>{ totalPrice.toLocaleString('pt-br', {
                    minimumFractionDigits: 2,
                    style: 'currency',
                    currency: 'BRL'
                  }) }</span>
              </div>
            </div>}
        />
      </Container>
    </Wrapper>
  )
}

export default App