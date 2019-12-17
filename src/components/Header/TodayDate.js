import React from "react";
import { HeadDates } from "../Styles";


const today = new Date();
export const todayDate = today.getFullYear() + "-" + (today.getMonth()+1) + "-" + today.getDate();

const TodayDate = () => {
    return (
        <HeadDates className="today-date">
            Today is:<br />{todayDate}.
        </HeadDates>
    );
};

export default TodayDate;