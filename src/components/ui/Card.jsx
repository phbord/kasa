import { useState } from 'react'
import { NavLink } from 'react-router-dom'

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
        </div>
      </NavLink>
    </>
  )
}

export default Card