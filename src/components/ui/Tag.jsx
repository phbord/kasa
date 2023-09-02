import { useState } from 'react'


const Tag = ({tag}) => {
  const [tagVal] = useState(tag)
  return (
    <>
      <div className="tag">
        <span>{tagVal}</span>
      </div>
    </>
  )
}

export default Tag