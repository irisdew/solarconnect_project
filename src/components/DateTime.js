import React, { useState, useEffect } from "react";
import { korWeek, usWeek, usMonth } from "Constant";

function DateTime({ type }) {
    const [krDate, setKrDate] = useState([]);
    const [usDate, setUsDate] = useState([]);

    useEffect(() => {
        setDates();
    }, []);

    // 일~토 가져옴
    function getKoreanWeek(index) {
        const week = korWeek;
        return week[index];
    }

    // sunday~saturday
    function getUsWeek(index) {
        const week = usWeek;
        return week[index];
    }

    // Jan ~ Dec 가져옴
    function getUsMonth(index) {
        const month = usMonth;

        return month[index - 1];
    }

    function getUsTime() {
        const { year, month, day, week, hour, min, sec } = genNowDate();
        const usWeek = getUsWeek(week);
        const usMonth = getUsMonth(month);

        const usDate = [
            `${usWeek}`,
            `${usMonth} ${day}, ${year}`,
            `${hour} : ${min} : ${sec}`,
        ];
        return usDate;
    }
    function getKoreanTime() {
        const { year, month, day, week, hour, min, sec } = genNowDate();

        const korWeek = getKoreanWeek(week);
        // const koreanDate =
        //     year +
        //     "년 " +
        //     month +
        //     "월 " +
        //     day +
        //     "일 " +
        //     korWeek +
        //     "요일 " +
        //     hour +
        //     ":" +
        //     min +
        //     ":" +
        //     sec;
        const koreanDate = [
            `${year}년 ${month}월 ${day}일`,
            `${korWeek}요일`,
            `${hour} : ${min} : ${sec}`,
        ];
        return koreanDate;
    }

    function genNowDate() {
        const date = new Date(); //날짜 객체 생성

        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const week = date.getUTCDay();
        let hour = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();

        hour = hour < 10 ? "0" + hour : hour;
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;
        return { year, month, day, week, hour, min, sec };
    }

    function setDates() {
        setInterval(() => {
            const korTime = getKoreanTime();
            const usTime = getUsTime();

            setKrDate(korTime);
            setUsDate(usTime);
        }, 1000); //1초마다 새로고침
    }

    return (
        <>
            {type === "kr" ? (
                <div className="wrapper__time">
                    {krDate.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))}
                </div>
            ) : (
                <div className="wrapper__time">
                    {usDate.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))}
                </div>
            )}
        </>
    );
}

export default DateTime;
