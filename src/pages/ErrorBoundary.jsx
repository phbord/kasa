import { NavLink } from 'react-router-dom'

import { useState } from 'react'


const ErrorBoundary = ({statusCode, errorMessage}) => {
  const [code] = useState(() => statusCode ? statusCode : "404")
  const [message] = useState(() => errorMessage ? errorMessage : "Oups! La page que vous demandez n'existe pas.")

  return (
    <>
      <section className='not-found'>
        <h2>{code}</h2>
        <p>{message}</p>
        <NavLink to='/'>Retourner sur la page d’accueil</NavLink>
      </section>
    </>
  )
}

export default ErrorBoundary