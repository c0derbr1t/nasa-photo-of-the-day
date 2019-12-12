import React from "react";
import TodayDate from "./TodayDate";
import PhotoDate from "./PhotoDate"
import { Head, MainTitle } from "../Styles";

export default function Header(props) {
    return (
        <Head className="header">
            <TodayDate/>
            <MainTitle>NASA Photo of the Day</MainTitle>
            <PhotoDate nasaData={props.nasaData}/>
        </Head>
    )
}
