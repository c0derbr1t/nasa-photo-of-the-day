import React, { useState, useEffect } from "react";
import axios from "axios";
import { token } from "../../auth.js";

const Text = () => {
    const [title, setTitle] = useState([]);
    const [date, setDate] = useState([]);
    const [explanation, setExplanation] = useState([]);

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=${token}`)
        .then(response => {
            setTitle(response.data.title);
            setDate(response.data.date);
            setExplanation(response.data.explanation)
        })
        .catch(error => {
            console.log("There was an error in Text: " + error);
        });
    }, [date]);

    return (
        <div className="text">
            <div className="info">
                <div className="title-info">
                    <p>{title}</p>
                    <p>{date}</p>
                </div>
                <div className="explanation-info">
                    <p>{explanation}</p>
                </div>
            </div>
        </div>
    )
}

/*
const [changeDate, setChangeDate] = useState([]);

    return (
        <div className="buttons">
            <button onClick={() => {
                setDate(
                    let newDate = prompt("What date would you like? Please use YYYY-MM-DD Format.", "YYYY-MM-DD")
                    )}></button>
            }
        </div>
    )
*/

export default Text;