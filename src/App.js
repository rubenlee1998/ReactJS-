import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log("i run all the time");
  }, [counter]);
  const iRunOnlyOnce = () => {
    console.log("Call the API...");
  };
  useEffect(iRunOnlyOnce, []);
  useEffect(() => {
    console.log("SEARCH FOR", keyword);
  }, [keyword]);
  return (
    <div>
      <input onChange={onChange} type="text" placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
