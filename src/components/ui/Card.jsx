import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import createRatingArray from '../../utils/functions/createRatingArray'
import colors from '../../utils/functions/colors'
import Star from './Star'
import Tag from './Tag'


const Card = ({data}) => {
  const [dataList] = useState(data)
  const [ratingNum] = useState(() => createRatingArray(data))

  return (
    <>
      <NavLink to={`/accomodation/${dataList.id}`} className="card">
        {/* PICTURE */}
        <figure className="card-header">
          <img src={dataList.cover} alt={dataList.title} />
        </figure>

        {/* BODY */}
        <div className="card-body">
          {/* TITLE */}
          <h3>{dataList.title}</h3>
          {/* DESCRIPTION */}
          <p>{dataList.location}</p>
          {/* TAGS list */}
          <ul className='tags-list'>
            {
              dataList.tags && dataList.tags.map((tag) => (
                <li key={uuidv4()}>
                  <Tag tag={tag} />
                </li>
              ))
            }
          </ul>
          {/* RATING list */}
          <figure className='card-rating-list'>
            {/* STARS */}
            {
              ratingNum && ratingNum.map((item) => (
                item
                  ? (<Star key={uuidv4()} color={colors.red} />)
                  : (<Star key={uuidv4()} color={colors.grey} />)
              ))
            }
          </figure>
        </div>
      </NavLink>
    </>
  )
}

export default Card