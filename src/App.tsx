import React from 'react';
import './App.css'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { increment, decrement, multiply } from './feature/counter/counterSlice'

function App() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  const handleMultiply = (value: number) => {
    dispatch(multiply(value))
  }

  return (
    <div>
      <h1>
        {count}
      </h1>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
      <button onClick={() => handleMultiply(2)}>mutliply by 2</button>
      <button onClick={() => handleMultiply(10)}>mutliply by 10</button>
    </div>
  );
}

export default App;
