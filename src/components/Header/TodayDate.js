import React from "react";

const TodayDate = () => {
    const today = new Date();
    const todayDate = today.getFullYear() + "-" + (today.getMonth()+1) + "-" + today.getDate();

    return (
        <div className="today-date">
            Today is {todayDate}.
        </div>
    );
};

export default TodayDate;