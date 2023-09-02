import { useState } from 'react'


const Avatar = ({url, text}) => {
  const [urlVal] = useState(url)
  const [textVal] = useState(text)

  return (
    <>
      <figure className='avatar'>
        <figcaption>{textVal}</figcaption>
        <img src={urlVal} alt={textVal} />
      </figure>
    </>
  )
}

export default Avatar