import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './App.css'
import { Suspense, lazy } from 'react'

const FormBuilder = lazy(() => import('./pages/formBuilder'))
const FormRender = lazy(() => import('./pages/formRender'))
// const homePageBtn = 'px-8 py-3 bg-blue-400 text-white font-bold mx-5 mb-4 block w-fit'
export default function App(){
  return(
    <div className='min-h-screen bg-teal-800 '>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* <Route path='/' element={<div><Link className={homePageBtn} to='/builder'>Builder</Link><Link className={homePageBtn} to='/render'>Render</Link></div>}/> */}
          <Route path='/' element={<FormBuilder/>}/>
          <Route path='render' element={<FormRender/>}/>
        </Routes>
        </Suspense>
      </BrowserRouter>      
    </div>
  )
}