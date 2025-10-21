import { useState, useMemo, useRef } from "react";

const Usememo = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const inputref = useRef()

  const increment = () => {
    setCount(count + 1);
  };

  function Double(num) {
    // simulate heavy calculation
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  }

  const handleClick = ()=>{
    let value = inputref.current.value;
    setInput(value);
  }

  const doubleValueMemo = useMemo(() => Double(input), [input]);

  return (
    <>
      <h1>useMemo Example</h1>
      <h2>Count: {count}</h2>
      <h2>Double Value: {doubleValueMemo}</h2>
      <button onClick={increment}>Click</button> <br /> <br />
      <input
        type="text"
        // value={input}
        // onChange={(e) => setInput(e.target.value)}
        ref={inputref}
      /> <br /> <br />
      <button onClick={handleClick}>Click 2</button>
      


    </>
  );
};

export default Usememo;
