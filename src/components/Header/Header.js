import React from "react";
import TodayDate from "./TodayDate";
import PhotoDate from "./PhotoDate"

export default function Header(props) {
    return (
        <div className="header">
            <TodayDate/>
            <h1>NASA Photo of the Day</h1>
            <PhotoDate nasaData={props.nasaData}/>
        </div>
    )
}
