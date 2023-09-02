import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import AcordionItem from './AcordionItem'


const AcordionAbout = ({data}) => {
  const [dataList, setDataList] = useState(null)

  useEffect(() => {
    setDataList(data)
  }, [data])

  return (
    <>
      <ul className="acordion">
        {
          dataList && dataList.map(item => (
            <AcordionItem key={uuidv4()} title={item.title}>
              <p>{item.content}</p>
            </AcordionItem>
          ))
        }
      </ul>
    </>
  )
}

export default AcordionAbout