import React from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import { Suspense, lazy } from 'react'

const Home = lazy(() => import('./pages/home'))
const FormBuilder = lazy(() => import('./pages/formBuilder'))
const FormRender = lazy(() => import('./pages/formRender'))

export default function App(){
  return(
    <div className='min-h-screen'>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='forms'>
          <Route index path='questions' element={<FormBuilder/>}/>
          <Route path='preview' element={<FormRender/>}/>
        </Route>
      </Routes>
      </Suspense>
    </div>
  )
}