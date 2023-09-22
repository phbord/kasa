import { useState } from 'react'

import Arrow from '../../assets/images/arrow.svg'
import AcordionItem from './AcordionItem'


const AcordionAccomodation = ({description, equipments}) => {
  const [descriptionVal] = useState(description)
  const [equipmentsVal] = useState(equipments)

  return (
    <>
      <ul className="acordion">
        {/* DESCRIPTION block */}
        <AcordionItem title='Description'>
          <p>{descriptionVal}</p>
        </AcordionItem>

        {/* ACTION block */}
        <AcordionItem title='Équipements'>
          <ul>
            {
              equipmentsVal && equipmentsVal.map((equipment, index) => (
                <li key={index} 
                    className="acordion-body-item">{equipment}</li>
              ))
            }
          </ul>
        </AcordionItem>
      </ul>
    </>
  )
}

export default AcordionAccomodation