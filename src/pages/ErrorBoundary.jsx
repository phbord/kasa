import { NavLink } from 'react-router-dom'

import Transitions from '../components/ui/Transitions'
import { useState } from 'react'


const ErrorBoundary = ({statusCode, errorMessage}) => {
  const [code] = useState(() => statusCode ? statusCode : "404")
  const [message] = useState(() => errorMessage ? errorMessage : "Oups! La page que vous demandez n'existe pas.")

  return (
    <Transitions>
      <section className='not-found'>
        <h2>{code}</h2>
        <p>{message}</p>
        <NavLink to='/'>Retourner sur la page d’accueil</NavLink>
      </section>
    </Transitions>
  )
}

export default ErrorBoundary