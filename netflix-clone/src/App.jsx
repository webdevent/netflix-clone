import './App.css'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import Player from './pages/Player/Player.jsx'
import Search from './pages/Search/Search.jsx'
import {BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
 
  return (
    <>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/player/:title' element={<Player/>}/>
        </Routes>
    </>
  )
}

export default App
