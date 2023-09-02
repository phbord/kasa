import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

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
              equipmentsVal && equipmentsVal.map((equipment) => (
                <li key={uuidv4()} 
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