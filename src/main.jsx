import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Layout from './components/layout/Layout'
import Home from './pages/home/Home'
const routes = createRoutesFromElements(
  <Route element={<Layout/>}>
     <Route path='/test' element={<Home />}/>
      <Route path='*' element={<div>Page not found</div>}/>
  </Route>
)
const router = createBrowserRouter(routes)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
)
