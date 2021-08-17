import React, { useState } from "react";
import Timer from "./components/Timer";
import Input from "./components/Input";
import Result from "./components/Result";

function App() {
  const [value, setValue] = useState("");
  const [nums, setNums] = useState([]);
  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };
  const onClickHandler = () => {
    const result = value
      .split(",")
      .filter((el) => el !== " " && !isNaN(el))
      .map((el) => +el);
    setNums(result);
  };
  return (
    <div className="App">
      <h1>솔라커넥트 Sorting Machine</h1>
      <Timer locale="ko-KR" />
      <Input value={value} onChangeHandler={onChangeHandler} />
      <button onClick={onClickHandler}>시작</button>
      <Result nums={nums} desc={false} />
      <Result nums={nums} desc={true} />
      <Timer locale="en-US" />
    </div>
  );
}

export default App;
