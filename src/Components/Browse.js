import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import CharacterDetails from './CharacterDetails'


const Browse = () => {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<CharacterDetails />} />
        <Route path="/details/character" element={<CharacterDetails />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Browse
