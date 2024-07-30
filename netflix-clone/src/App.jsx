import './App.css'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import Player from './pages/Player/Player.jsx'
import {Router, Route, Routes } from 'react-router-dom'

function App() {
 
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/player' element={<Player/>}/>
      </Routes>
    </>
  )
}

export default App
