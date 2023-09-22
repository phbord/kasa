import { useEffect, useState } from 'react'

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
          dataList && dataList.map((item, index) => (
            <AcordionItem key={index} title={item.title}>
              <p>{item.content}</p>
            </AcordionItem>
          ))
        }
      </ul>
    </>
  )
}

export default AcordionAbout