
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset, incrementByAmount } from './features/counter/counterSlice'
import { useState } from 'react'

function App() {
  const [amount, setAmount] = useState(0)
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  function handleDecrementClick() {
    dispatch(decrement())
  }

  function handleIncrementClick() {
    dispatch(increment())
  }

  function handleResetClick() {
    dispatch(reset())
  }

  function handleIncAmountClick(){
    dispatch(incrementByAmount(amount))
  }

  return (
    <>
      <div className='container'>
        <button onClick={handleIncrementClick}>+</button>
        <p>Count:{count} </p>
        <button onClick={handleDecrementClick}>-</button>
       
        <button onClick={handleResetClick}>Reset</button>
      </div>
      <br />
      <br />
      <input type="number" value={amount} placeholder='Enter amount' onChange={(e) => setAmount(e.target.value)} />
      <br />
      <br />
      <button onClick={handleIncAmountClick}>Inc by amount</button>
    </>
  )
}

export default App
