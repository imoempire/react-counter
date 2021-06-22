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
      <button>
      <h1>Count: {count}</h1>
      <button className="go" onClick={handleIncrease}>Increase</button>
      <button className="stop" onClick={handleDecrease}>Decrease</button> 
      </button>   
    </div>
  );
}
export default FunctionCounter;
