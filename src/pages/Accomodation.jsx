import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import accomodationsData from '../assets/data/accomodations.json'
import createRatingArray from '../utils/functions/createRatingArray'
import colors from '../utils/functions/colors'
import { useDataFile } from "../utils/hooks/useDataFile"

import Tag from '../components/ui/Tag'
import Avatar from '../components/ui/Avatar'
import Star from '../components/ui/Star'
import AcordionAccomodation from '../components/ui/AcordionAccomodation'
import Carousel from '../components/ui/Carousel'


const Accomodation = () => {
  const { idSlug } = useParams()
  const navigate = useNavigate()
  
  const {data, error} = useDataFile(accomodationsData, idSlug)
  const dataFound = accomodationsData.find(item => item.id === idSlug)

  const [currentData] = useState(dataFound)
  const [ratingNum, setRatingNum] = useState(null)

  useEffect(() => {
    dataFound && setRatingNum(createRatingArray(dataFound))
    !dataFound && navigate('/error')
  }, [])

  useEffect(() => {
    dataFound && setRatingNum(createRatingArray(dataFound))
    !dataFound && navigate('/error')
  }, [idSlug])

  return (
    <>
      {
        !error && currentData && (
          <>
            {/* C A R O U S E L  block */}
            <div className="accomodation-carousel">
              <Carousel data={currentData.pictures} />
            </div>

            {/* D E T A I L S  block */}
            <section className="accomodation-details">
              {/* HEAD block */}
              <div className="row">
                {/* TITLES */}
                <div className='col-12 col-md-9'>
                  <h2>{currentData.title}</h2>
                  <h3>{currentData.location}</h3>
                  {/* TAGS list */}
                  <ul className='tags-list'>
                    {
                      currentData.tags && currentData.tags.map((tag, index) => (
                        <li key={index}>
                          <Tag tag={tag} />
                        </li>
                      ))
                    }
                  </ul>
                </div>
                {/* HOST */}
                <div className='col-12 col-md-3'>
                  <div className="accomodation-host">
                    {/* AVATAR circle */}
                    <Avatar url={currentData.host.picture} 
                            text={currentData.host.name} />
                    {/* RATING list */}
                    <figure className='card-rating-list'>
                      {/* STARS */}
                      {
                        ratingNum && ratingNum.map((item, index) => (
                          item
                            ? (<Star key={index} color={colors.red} />)
                            : (<Star key={index} color={colors.grey} />)
                        ))
                      }
                    </figure>
                  </div>
                </div>
              </div>

              {/* ACORDION block */}
              <div className="accomodation-acordion">
                <AcordionAccomodation description={currentData.description} 
                                      equipments={currentData.equipments} />
              </div>
            </section>
          </>
        )
      }
    </>
  )
}

export default Accomodation