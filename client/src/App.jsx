import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './App.css'
import { Suspense, lazy } from 'react'

const FormBuilder = lazy(() => import('./pages/formBuilder'))
const FormRender = lazy(() => import('./pages/formRender'))

export default function App(){
  return(
    <div className='min-h-screen bg-teal-800 '>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<div><Link to='/builder'>Builder</Link><Link to='/render'>Render</Link></div>}/>
          <Route path='/builder' element={<FormBuilder/>}/>
          <Route path='render' element={<FormRender/>}/>
        </Routes>
        </Suspense>
      </BrowserRouter>      
    </div>
  )
}