import React, { useState, useEffect } from 'react'

import { sort, makeArrayfromString } from 'utils/sort'
function Result({ inputValue, desc }) {
  const [ascSort, setAscSort] = useState([])
  const [descSort, setDesccSort] = useState([])

  const [waiting, setWaiting] = useState(true)

  useEffect(() => {
    inputValue && init()
    setWaiting(true)
  }, [inputValue])

  function init() {
    const arr = makeArrayfromString(inputValue)
    setAscSort(sort(arr, false))
    setTimeout(() => {
      setDesccSort(sort(arr, true))
      setWaiting(false)
    }, 3000)
  }

  return (
    <div className="result">
      <div className="result__title">{desc ? '내림차순' : '오름차순'}</div>
      <div className="result__content">
        {desc ? (
          <>{waiting ? 'waiting' : <span>{descSort.join(', ')}</span>}</>
        ) : (
          <span>{ascSort.join(', ')}</span>
        )}
      </div>
    </div>
  )
}

export default Result
