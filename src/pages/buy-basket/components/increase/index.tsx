import { useState } from 'react'

export const Increase = () => {
  const [num, setNum] = useState(1)
  const maxNum = 20
  const increase = () => {
    if (num === maxNum) {
      setNum(1)
    } else {
      setNum(num + 1)
    }
  }
  const decrease = () => {
    if (num === 1) {
      setNum(maxNum)
    } else {
      setNum(num - 1)
    }
  }
  return (
    <div className="increase">
      <button className="crease" onClick={() => increase()}>
        +
      </button>
      <h2 className="number">{num}</h2>
      <button className="crease" onClick={() => decrease()}>
        -
      </button>
    </div>
  )
}
