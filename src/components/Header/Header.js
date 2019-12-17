import React from "react";
import TodayDate from "./TodayDate";
import PhotoDate from "./PhotoDate"
import { Head, HeadTitle } from "../Styles";

export default function Header(props) {
    return (
        <Head className="header">
            <TodayDate/>
            <HeadTitle>NASA Photo of the Day</HeadTitle>
            <PhotoDate nasaData={props.nasaData}/>
        </Head>
    )
}
