import './App.css'
import { Routes, Route } from 'react-router-dom'
import MainPage from './Pages/MainPage/MainPage'
import AboutVacancy from './Pages/AboutVacancy/AboutVacancy'
function App() {

  return (
    <Routes>
      <Route path='/' element={<MainPage/>}></Route>
      <Route path='/about-vacancy' element={<AboutVacancy/>}></Route>
    </Routes>
  )
}

export default App
