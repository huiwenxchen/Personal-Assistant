import React from 'react'
import { FancyButton } from './styles'

const ExampleComponent = ({ alertText }) => (
  <FancyButton onClick={() => alert('Hello, World!')}>Click Me!</FancyButton>
)

export default ExampleComponent
