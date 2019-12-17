import React from "react";
import { HeadDates } from "../Styles";

const PhotoDate = (props) => {

    if (!props.nasaData.date) return <h3>Loading Date...</h3>;
    return (
        <HeadDates className="photo-date">
            Photo of the day for:<br />{props.nasaData.date}
        </HeadDates>
    )
}

export default PhotoDate;