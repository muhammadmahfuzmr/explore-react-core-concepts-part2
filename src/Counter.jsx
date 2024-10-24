import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0)
    function increaseButton (){
        const newCount = count + 1;
        setCount(newCount)
    }
    const reduceButton = ()=>{
        const newCount = count - 1;
        setCount(newCount)
    }
  return (
    <div style={{"border": '2px solid red', 'margin': '10px', 'padding': '20px'}}>
      <h2>Counter:  {count}</h2>
      <button onClick={increaseButton}>Increase Count Number</button>
      <button onClick={reduceButton}>Reduce Count Number</button>
    </div>
  );
}
