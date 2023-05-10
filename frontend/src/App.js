import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main.jsx'
import { MovieContextProvider } from './context/MovieContext.js'

const App = () => {
  return (
    <MovieContextProvider>
      <React.Fragment>
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </React.Fragment>
    </MovieContextProvider>
  )
}

export default App
