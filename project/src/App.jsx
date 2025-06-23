import './App.css'
import { Routes, Route } from 'react-router-dom'
import MainPage from './Pages/MainPage/MainPage'
<<<<<<< HEAD
import VacancyPage from './Pages/VacancyPage/VacancyPage'
import StarPage from './Pages/StarPage/StarPage'
=======
import AboutVacancy from './Pages/AboutVacancy/AboutVacancy'
>>>>>>> 844753582d0f5c9984448a39a81ec3024f37aa0b
function App() {

  return (
    <Routes>
      <Route path='/' element={<MainPage/>}></Route>
<<<<<<< HEAD
      <Route path='/basket' element={<StarPage/>}></Route>
      <Route path='/:id' element={<VacancyPage/>}></Route>
=======
      <Route path='/about-vacancy' element={<AboutVacancy/>}></Route>
>>>>>>> 844753582d0f5c9984448a39a81ec3024f37aa0b
    </Routes>
  )
}

export default App
