import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Home from '../pages/home/Home'
import Buttons from '../pages/buttons/Buttons'
import Menus from '../pages/menus/Menus'



const Router = () => {
  return (
    <BrowserRouter>
        <Layout>
            <Routes>

                <Route path='/' element={<Home />} />
                <Route path='buttons' element={<Buttons />} />
                <Route path='menus' element={<Menus />} />
                <Route path='*' element={<Home />} />

            </Routes>
        </Layout>
    </BrowserRouter>
  )
}

export default Router