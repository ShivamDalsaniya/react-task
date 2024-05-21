import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/css/style.css'
import Layout from './Layout'
import PageNotFound from './components/PageNotFound'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route path='/' element={<Layout />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
    </Router>
  </React.StrictMode>,
)
