import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Recipes from './components/Recipes';
const App = () => {
  return (
    <div className='app-div'>

      <BrowserRouter>

        <Navbar />



        <Routes>



          <Route path='/' element={<Home />} ></Route>
          <Route path='/signup' element={<Signup />} ></Route>
          <Route path='/recipes' element = {<Recipes/>} ></Route>


        </Routes>


      </BrowserRouter>


    </div>
  )
}

export default App