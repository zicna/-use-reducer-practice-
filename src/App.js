import CounterState from "./component/CounterWithState"
import CounterReducer from './component/CounterWithReducer'

function App() {
  return (
    <div>
      Hello from useReducer Hook Practise
      <CounterState />
      <CounterReducer />
    </div>
  )
}

export default App
