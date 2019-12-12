import React from "react";

const PhotoDate = (props) => {

    if (!props.nasaData.date) return <h3>Loading Date...</h3>;
    return (
        <div className="photo-date">
            Photo of the day for:  {props.nasaData.date}
        </div>
    )
}

export default PhotoDate;