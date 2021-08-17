import React, { useState, useEffect } from "react";

function Result({ inputValue }) {
    const [arrAsc, setArrAsc] = useState([]);
    const [arrDesc, setArrDesc] = useState([]);
    const [waiting, setWaiting] = useState(true);

    useEffect(() => {
        init();
    }, [inputValue]);

    // 배열을 내림차순으로 정렬
    const sortDesc = (value) => {
        let arr = value.slice();
        for (let i = 0; i < arr.length; i++) {
            for (let j = i; j > 0; j--) {
                //크면 교환
                if (arr[j] > arr[j - 1]) {
                    let tmp = arr[j];
                    arr[j] = arr[j - 1];
                    arr[j - 1] = tmp;
                } else {
                    break;
                }
            }
        }
        setArrDesc(arr);
    };

    // 배열을 오름차순으로 정렬
    function sortAsc(value) {
        let arr = value.slice();
        for (let i = 0; i < arr.length; i++) {
            for (let j = i; j > 0; j--) {
                if (arr[j] < arr[j - 1]) {
                    let tmp = arr[j];
                    arr[j] = arr[j - 1];
                    arr[j - 1] = tmp;
                } else {
                    break;
                }
            }
        }
        setArrAsc(arr);
    }

    // 가져온 값을 배열로 변경
    function makeArrayfromString(value) {
        const arr = value.split(",").map((item) => {
            return parseInt(item, 10);
        });
        return arr;
    }

    function init() {
        const arr = makeArrayfromString(inputValue);
        sortAsc(arr);
        setTimeout(() => {
            sortDesc(arr);
        }, 3000);
    }

    return (
        <div className="wrapper__result">
            <div className="result">
                <div className="result__title">오름차순</div>
                <div className="result__content">
                    {arrAsc.map((item, index) => (
                        <span key={index}>
                            {index !== 0 ? ", " + item : item}
                        </span>
                    ))}
                </div>
            </div>
            <div className="result">
                <div className="result__title">내림차순 </div>
                <div className="result__content">
                    {waiting ? "waiting" : "d"}
                    {arrDesc.map((item, index) => (
                        <span key={index}>
                            {index !== 0 ? ", " + item : item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Result;
