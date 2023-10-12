import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'


import MainMenu from './pages/MainMenu.tsx'
import TicTacToe from './pages/TicTacToe.tsx'

import App from './App.tsx'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route index element={<MainMenu />} />
      <Route path='game' element={<TicTacToe />} />
      <Route element={<TicTacToe />} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
