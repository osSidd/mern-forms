import React from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import { Suspense, lazy } from 'react'

const Home = lazy(() => import('./pages/home'))
const Questions = lazy(() => import('./pages/questions'))

export default function App(){
  return(
    <div className='min-h-screen'>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='forms'>
          <Route index path='questions' element={<Questions/>}/>
        </Route>
      </Routes>
      </Suspense>
    </div>
  )
}