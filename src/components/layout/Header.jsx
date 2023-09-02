import { NavLink } from 'react-router-dom'

import Logo from '../../assets/images/logo.svg'


const Header = () => {
  return (
    <header className='header'>
      <h1>
        <NavLink to="/">
          <img src={Logo} alt='Logo Kasa' className='header-logo' />
        </NavLink>
      </h1>
      <nav>
        <ul className='header-nav-list'>
          <li>
            <NavLink className='header-nav-link' to='/'>Accueil</NavLink>
          </li>
          <li>
            <NavLink className='header-nav-link' to='/about'>A propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header