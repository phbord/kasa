import { useState } from 'react'


const FullPicturePresention = (props) => {
  const { text, bgImg } = props
  const [textVal] = useState(text)
  const [bgImgVal] = useState(bgImg)

  return (
    <>
      <div className='full-picture-presentation'
            style={{ backgroundImage: `url(${bgImgVal})` }}>
        {
          textVal && textVal !== '' && (
            <h2>{textVal}</h2>
          )
        }
      </div>
    </>
  )
}

export default FullPicturePresention