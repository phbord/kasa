import { useState } from 'react'

import Arrow from '../../assets/images/arrow.svg'


const AcordionItem = ({title, children}) => {
  const [titleVal] = useState(title)
  const [isOpened, setIsOpened] = useState(false)

  const handleClick = () => {
    setIsOpened(!isOpened)
  }

  return (
    <>
      <li className={`acordion-item ${isOpened ? 'is-opened' : ''}`}>
        {/* A C T I O N */}
        <button type="button"
                className="acordion-action"
                onClick={() => handleClick()}>
          <span>{titleVal}</span>
          <img src={Arrow} 
                alt={titleVal} />
        </button>

        {/* B O D Y */}
        <div className={`acordion-body ${isOpened ? '' : 'is-hidden'}`}>
          {children}
        </div>
      </li>
    </>
  )
}

export default AcordionItem