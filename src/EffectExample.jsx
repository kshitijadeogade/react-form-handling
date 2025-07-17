import React, { useEffect, useState } from 'react'

const EffectExample = () => {
  console.log("Added to DOM");
  const [count, setCount] = useState(0);
  useEffect(()=> {
    console.log("SUBSCRIBED");
    return () => {
      console.log("UN-SUBSCRIBED")
    };
  },[count]);
  return (
    <div>
      <article>Count: {count}</article>
      <button onClick = {() => setCount((prev) => prev+1)}>Increment</button>
    </div>
  );
};

export default EffectExample;