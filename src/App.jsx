import { useState } from 'react'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Blank from './pages/Blank'
import Login from './pages/Login'
import AppLayout from './components/layout/AppLayout'
import './App.css'
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
            <Route index element={<Blank />} />
            <Route path="/started" element={<Blank />} />
            <Route path="/calendar"  element={<Blank />} />
            <Route path="/user"   element={<Blank />} />
            <Route path="/order"  element={<Blank />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
