import "./App.css";
import Counter from "./Counter";
import Team from "./Team";
import Users from "./Users";

function App() {
  function button1 (){
alert('button 1 clicked')
  }
  return (
    <>
      <h1>React Core Concept Part-02</h1>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={button1}>Click Me 1</button>
      <button onClick={function button2 (){
        alert('button 2 clicked')
      }}>Click me 2</button>
      <button onClick={()=>{
        alert('Clicked Button 3')
      }}>Click Button 3</button>
    </>
  );
}

export default App;
