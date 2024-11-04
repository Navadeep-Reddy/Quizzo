import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Attend from './pages/Attend'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element = {<Home/>}/>
        <Route path = '/attend/:quizz_id' element = {<Attend/>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
