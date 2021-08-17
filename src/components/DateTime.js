import React, { useState, useEffect } from "react";

function DateTime({ type }) {
    const date = new Date();
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    return (
        <div className="wrapper__time">
            <p>{date.toLocaleDateString(type, options)}</p>
        </div>
    );
}

export default DateTime;
