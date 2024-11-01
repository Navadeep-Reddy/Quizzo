import { useState } from 'react'

import './styles/App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navigation ></Navigation>
      <Hero></Hero>
      <Hero></Hero>
    </div>

  )
}

export default App
