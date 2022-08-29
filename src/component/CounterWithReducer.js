import styles from './CounterWithReducer.module.css'

const CounterWithReducer = () => {
    const decrement = () => {
        console.log("hello from decrement")
    } 
    const increment = () => {
        console.log("hello from decrement")
    } 
    const count  = 0;
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Hello from Counter With State</h1>
      <div>
        <button onClick={decrement} className={styles.decrement}>
          -
        </button>
        <span className={styles.span}>{count}</span>
        <button onClick={increment} className={styles.increment}>
          +
        </button>
      </div>
    </div>
  )
}

export default CounterWithReducer
