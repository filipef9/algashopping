import React from 'react'
import { Lista, Title, Wrapper } from './ShoppingList.styles'
import Checkbox from '../../shared/Checkbox'
// import { useSelector } from 'react-redux'
// import { selectAllProducts } from '../../store/Products/Products.selectors'

const ShoppingList = ({ title, products = [], onToggle }) => {

  // const productsXXX = useSelector(selectAllProducts);

  return (
    <Wrapper>
      <Title>{ title }:</Title>
      <Lista>
        { products.map(product => {
          const {id, name, checked } = product;
          return (
            <Checkbox 
              key={id} 
              title={name} 
              value={checked}
              onClick={() => onToggle(product.id)}
            />
          )
        })}
      </Lista>
    </Wrapper>
  )
}

export default ShoppingList