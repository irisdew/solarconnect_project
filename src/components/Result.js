import React, { useState, useEffect } from "react";

function Result({ inputValue, desc }) {
    const [arrAsc, setArrAsc] = useState([]);
    const [arrDesc, setArrDesc] = useState([]);
    const [waiting, setWaiting] = useState(true);

    useEffect(() => {
        init();
        setWaiting(true);
    }, [inputValue]);

    const sort = (value, desc) => {
        let arr = value.slice();

        for (let i = 0; i < arr.length; i++) {
            for (let j = i; j > 0; j--) {
                if (desc ? arr[j] > arr[j - 1] : arr[j] < arr[j - 1]) {
                    let tmp = arr[j];
                    arr[j] = arr[j - 1];
                    arr[j - 1] = tmp;
                } else {
                    break;
                }
            }
        }
        desc ? setArrDesc(arr) : setArrAsc(arr);
    };

    // 가져온 값을 배열로 변경
    function makeArrayfromString(value) {
        const arr = value.split(",").map((item) => {
            return parseInt(item, 10);
        });
        return arr;
    }

    function init() {
        const arr = makeArrayfromString(inputValue);
        sort(arr, false);
        setTimeout(() => {
            sort(arr, true);
            setWaiting(false);
        }, 3000);
    }

    return (
        <div className="result">
            <div className="result__title">
                {desc ? "내림차순" : "오름차순"}
            </div>
            <div className="result__content">
                {desc ? (
                    <>
                        {waiting ? (
                            "waiting"
                        ) : (
                            <span>{arrDesc.join(", ")}</span>
                        )}
                    </>
                ) : (
                    <span>{arrAsc.join(", ")}</span>
                )}
            </div>
        </div>
    );
}

export default Result;
