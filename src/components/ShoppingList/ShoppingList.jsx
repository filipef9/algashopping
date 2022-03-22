import React from 'react'
import { Lista, Title, Wrapper } from './ShoppingList.styles'
import Checkbox from '../../shared/Checkbox'

const ShoppingList = ({ title, products = [], onToggle }) => {

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