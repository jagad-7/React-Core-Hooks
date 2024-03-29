import React, { useState } from "react";

export default function Count2() {
  const [counter, setCounter] = useState(0);
  const decrement = () => {
    //     setCounter(counter - 1)
    //    }
    setCounter((prevCount) => {
      return prevCount - 1;
    });
    // setCounter((prevCount ) => {
    //     return prevCount  + 1
    // })
    setCounter((prevCount) => prevCount - 1);
  };
  const increment = () => {
    // setCounter(counter + 1)
    // increse the count value multile at a time
    setCounter((prevCount) => {
      return prevCount + 1;
    });
    // setCounter((prevCount ) => {
    //     return prevCount  + 1
    // })
    setCounter((prevCount) => prevCount + 1);
  };
  return (
    <div style={{ marginTop: 30, fontSize: 26 }}>
      <button onClick={decrement}>-</button>
      <span style={{ paddingRight: 10, paddingLeft: 10, marginTop: 60 }}>
        {counter}
      </span>
      <button onClick={increment}>+</button>
    </div>
  );
}
