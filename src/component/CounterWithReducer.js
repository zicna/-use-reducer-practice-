import React, { useReducer } from 'react'
import styles from './CounterWithReducer.module.css'

const reducer = (state, action) => {
  // if (action.type == 'DECREMENT') return { count: state.count - 1 }
  // if (action.type == 'INCREMENT') return { count: state.count + 1 }
  // console.log('return default state')
  // return state

  switch (action.type) {
    case 'DECREMENT':
      return { count: state.count - 1 }
    case 'INCREMENT':
      return { count: state.count + 1 }
    default:
      return state
  }
}

const CounterWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  const decrement = () => {
    dispatch({ type: 'DECREMENT' })
  }
  const increment = () => {
    dispatch({ type: 'INCREMENT' })
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Hello from Counter With State</h1>
      <div>
        <button onClick={decrement} className={styles.decrement}>
          -
        </button>
        <span className={styles.span}>{state.count}</span>
        <button onClick={increment} className={styles.increment}>
          +
        </button>
      </div>
    </div>
  )
}

export default CounterWithReducer
