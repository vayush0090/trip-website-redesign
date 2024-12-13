import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import FakeNav from './components/FakeNav'

const App = () => {
  return (
    <>
      <Router>
        <FakeNav />
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App