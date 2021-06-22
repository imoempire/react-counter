import React from 'react';
import  { useState } from 'react';

const FunctionCounter=() => {
  const [count, setCount] = useState(0);
  const handleIncrease = ()=>{
      setCount(count +1)
  }
const handleDecrease =() => {
    setCount(count - 1)
}
  return (
    <div style={{textAlign: "center"}}>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>    
    </div>
  );
}
export default FunctionCounter;
