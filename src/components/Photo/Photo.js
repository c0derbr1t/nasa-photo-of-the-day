import React, { useState, useEffect } from "react";
import axios from "axios";
import { token } from '../../auth.js';

export default function Photo() {
    const [photo, setPhoto] = useState([]);


    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=${token}`)
        .then(response => {
            console.log(response.data);
            setPhoto(response.data.hdurl);
        })
        .catch(error => {
            console.log("There was an error in Photo: " + error);
        });
    }, []);

    return (
        <div className="photo">
            <img src={photo} alt="NASA" />
        </div>
    );
}