import React from "react";
import TodayDate from "./TodayDate";
import PhotoDate from "./PhotoDate"

export default function Header() {
    return (
        <div className="header">
            <TodayDate />
            <h1>NASA Photo of the Day</h1>
            <PhotoDate />
        </div>
    )
}
