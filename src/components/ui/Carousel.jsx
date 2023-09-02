import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Arrow from '../../assets/images/arrow.svg'


const Carousel = ({data}) => {
  const [imgList] = useState(data)
  const [imgNumber] = useState(data.length) // pictures number
  const [imgIndex, setImgIndex] = useState(1) // pagination index
  const [marginLeft, setMarginLeft] = useState(0)

  // PREVIOUS picture
  const prevHandle = () => {
    let newMarginLeft = 0
    
    if (imgIndex > 1) {
      setImgIndex(imgIndex - 1)
      newMarginLeft = -100*(imgIndex - 2)
    }
    else {
      setImgIndex(imgNumber)
      newMarginLeft = -100*(imgNumber - 1)
    }
    setMarginLeft(`${newMarginLeft}%`)
  }

  // NEXT picture
  const nextHandle = () => {
    let newMarginLeft = 0

    if (imgIndex < imgNumber) {
      setImgIndex(imgIndex + 1)
      newMarginLeft = -100*imgIndex
    }
    else {
      setImgIndex(1)
    }
    setMarginLeft(`${newMarginLeft}%`)
    
  }

  return (
    <>
      <div className="carousel">
        {/* C A R O U S E L */}
        <ul className="carousel-list">
          {
            imgList && imgList.map((imgUrl, i) => (
              (i === 0)
                ? (
                  <li key={uuidv4()} 
                      className="carousel-item"
                      style={{ 
                        backgroundImage: `url(${imgUrl.replace(/&quot;/g,'')})`,
                        marginLeft: `${marginLeft}`
                    }}></li>
                )
                : (
                  <li key={uuidv4()} 
                      className="carousel-item"
                      style={{ backgroundImage: `url(${imgUrl.replace(/&quot;/g,'')})` }}></li>
                )
            ))
          }
        </ul>
        {
          imgNumber && imgNumber > 1 && (
            <>
              {/* Previous  B U T T O N */}
              <button type='button' 
                      className="btn-prev"
                      onClick={() => prevHandle()}>
                <img src={Arrow} alt='Image précédente' />
              </button>

              {/* Next  B U T T O N */}
              <button type='button' 
                      className="btn-next"
                      onClick={() => nextHandle()}>
                <img src={Arrow} alt='Image suivante' />
              </button>

              {/* P A G I N A T I O N */}
              <div className="carousel-pagination">
                {imgIndex}/{imgNumber}
              </div>
            </>
          )
        }
      </div>
    </>
  )
}

export default Carousel