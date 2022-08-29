import React, {useState} from "react"

import styles from './CounterWithState.module.css'

const Counter = () => {
  const [count, setCounter] = useState(0)

  const decrement = () => {
    setCounter((prevState) => prevState - 1)
  }

  const increment = () => {
    setCounter(prevState => prevState + 1)
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Hello from Counter With State</h1>
      <div>
        <button onClick={decrement} className={styles.decrement}>-</button>
        <span className={styles.span}>{count}</span>
        <button onClick={increment} className={styles.increment}>+</button>
      </div>
    </div>
  )
}

export default Counter
