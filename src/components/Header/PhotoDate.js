import React, { useState, useEffect } from "react";
import axios from "axios";
import { token } from '../../auth.js';

const PhotoDate = (props) => {
    // Will pull from nasa api
    const [photoDate, setPhotoDate] = useState([]);

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=${token}`)
        .then(response => {
            setPhotoDate(response.data.date)
        })
        .catch(error => {
            console.log("There was an error in PhotoDate: " + error);
        });
    }, []);

    return (
        <div className="photo-date">
            Photo of the day for:  {photoDate}
        </div>
    )
}

export default PhotoDate;