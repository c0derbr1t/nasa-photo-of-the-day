import React from "react";
import { HeadDates } from "../Styles";

const TodayDate = () => {
    const today = new Date();
    const todayDate = today.getFullYear() + "-" + (today.getMonth()+1) + "-" + today.getDate();

    return (
        <HeadDates className="today-date">
            Today is:<br />{todayDate}.
        </HeadDates>
    );
};

export default TodayDate;