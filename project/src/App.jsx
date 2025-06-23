import './App.css'
import { Routes, Route } from 'react-router-dom'
import MainPage from './Pages/MainPage/MainPage'
import VacancyPage from './Pages/VacancyPage/VacancyPage'
import StarPage from './Pages/StarPage/StarPage'
function App() {

  return (
    <Routes>
      <Route path='/' element={<MainPage/>}></Route>
      <Route path='/basket' element={<StarPage/>}></Route>
      <Route path='/:id' element={<VacancyPage/>}></Route>
    </Routes>
  )
}

export default App
