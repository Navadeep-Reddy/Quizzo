import { useState } from 'react'

import './styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-[100%] bg-blue-300'>
      <p>Sample value</p>

    </div>
  )
}

export default App
