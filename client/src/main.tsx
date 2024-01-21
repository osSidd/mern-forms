import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'

const root = document.getElementById('root') as HTMLElement
// const root = document.getElementById('root')!
// const root = <HTMLElement>document.getElementById('root') NOT ALLOWED
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
