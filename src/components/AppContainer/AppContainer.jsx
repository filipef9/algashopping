import React from 'react'
import { Wrapper } from './AppContainer.styles'

const AppContainer = ({ leftColumn, middleColumn, rightColumn}) => {
  return (
    <Wrapper>
      <div>{ leftColumn }</div>
      <div>{ middleColumn }</div>
      <div>{ rightColumn }</div>
    </Wrapper>
  )
}

export default AppContainer