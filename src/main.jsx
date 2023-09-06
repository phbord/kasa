import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from'react-router-dom'

import './assets/styles/main.scss'
import Layout from './Layout.jsx'
import Home from './pages/Home'
import About from './pages/About'
import Accomodation from './pages/Accomodation'
import ErrorBoundary from './pages/ErrorBoundary'
import Loader from './components/ui/Loader'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          {/* Pages */}
          <Route index 
                  element={<Suspense fallback={Loader}><Home /></Suspense>} />
          <Route path='/about' 
                  element={<Suspense fallback={Loader}><About /></Suspense>} />
          <Route path='/accomodation/:idSlug' 
                  element={<Suspense fallback={Loader}><Accomodation /></Suspense>} />
          {/* Errors 404 page */}
          <Route path='/error' 
                  element={<Suspense fallback={Loader}><ErrorBoundary /></Suspense>} />
          <Route path='*' 
                  element={<Suspense fallback={Loader}><Navigate to="/error" /></Suspense>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
