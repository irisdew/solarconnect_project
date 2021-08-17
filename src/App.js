import React, { useState, useRef, useEffect } from "react";
import Result from "components/Result";
import DateTime from "components/DateTime";
import "styles/app.scss";

function App() {
    const inputNums = useRef(null);
    const [arrData, setArrData] = useState("");

    // input 에서 값 가져옴
    function getValueFromInput() {
        const inputValue = inputNums.current.value;
        return inputValue;
    }

    // 버튼 클릭 시
    function handleOnClick() {
        const value = getValueFromInput();
        setArrData(value);
    }

    return (
        <div className="wrapper">
            <DateTime type="kr" />
            <input
                type="text"
                ref={inputNums}
                placeholder="숫자를 입력해주세요"
            />
            <button onClick={handleOnClick}>SORT</button>
            <Result inputValue={arrData} />
            <DateTime type="us" />
        </div>
    );
}

export default App;
