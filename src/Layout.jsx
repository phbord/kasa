import { Outlet } from 'react-router-dom'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'


const Layout = () => {
  return (
    <>
      {/* CONTAINER */}
      <div className='container' id='container'>
        <Header />
        <main id='main'>
          {/* PAGES */}
          <Outlet />
        </main>
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  )
}

export default Layout
