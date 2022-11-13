import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Layout from './components/layout/Layout'
const routes = createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route path="/" element={<Home />} loader={Home.loader}/>
    
    <Route 
    // Tham số hóa đường dẫn
     path="/post/:postId"
     element={<PostDetail/>} 
     loader={PostDetail.loader}/>
     <Route path='/test' element={<Test />}/>
    <Route path='*' element={<div>Page not found</div>}/>
  </Route>
)
const router = createBrowserRouter(routes)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
)
