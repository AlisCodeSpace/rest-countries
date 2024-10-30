import './App.css'

import Navbar from './components/Navbar'
import Main from './pages/Main'
import Details from './pages/Details'

import { Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Main />}/>
        <Route path='/details' element={<Details />}/>
      </Routes>
    </div>
  )
}

export default App
