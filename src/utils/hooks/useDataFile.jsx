import { useEffect, useState } from 'react'


export const useDataFile = (file, id) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)

  const getData = () => {
    if (file) {
      const res = () => id ? file.find(item => item.id === id) : file
      setData(res)
    }
    else {
      setError(true)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return { data, error }
}