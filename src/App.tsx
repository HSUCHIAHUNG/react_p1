import { useState, useEffect } from "react";
import "./App.css";
// router
import Routes from "./router";

function App() {
  const [count, setCount] = useState(0);

  const initNumber = 0

  function StateFn () {
  
    const arr = [ initNumber, stateHandler ]

    function stateHandler (nextState: number) {
      arr[0] = nextState
    }

    return arr;
  }

  const [ number, serNumber ] = StateFn();
  StateFn()
  console.log(number) 



  const countHandle = () => {
    setCount((previousState) => previousState + 1);
    console.log(`${count} 已执行的函数`);
  };

  return (
    <>
      <Routes />
      <div className="card">
        <button onClick={countHandle}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
