
import {useState} from "react"

function App() {
  //let count = 0;
  
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    console.log("Handle Increment Called");
    setCount(count + 1);
  };
  console.log(count);
  return(
    <div>
      <div onClick={handleIncrement}>Click Me</div>
    <div>Count: {count}</div>
    </div>
  );
};

export default App
