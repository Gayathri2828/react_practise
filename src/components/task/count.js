import React, { useState } from 'react';

function Counter() {
   const [count, setCount] = useState(0);
   const IncrementHandler = () => {
    setCount(count + 1);
  };

  return (
    <div>
       <p>Count: {count}</p>
       <button onClick={IncrementHandler}>Increase Count</button>
    </div>
  );
}
export default Counter;



 
