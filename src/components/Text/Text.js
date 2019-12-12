import React from "react";


const Text = (props) => {

    if (!props.nasaData) return <h3>Loading Information...</h3>

    return (
        <div className="text">
            <div className="info">
                <div className="title-info">
                    <p>{props.nasaData.title}</p>
                    <p>{props.nasaData.date}</p>
                </div>
                <div className="explanation-info">
                    <p>{props.nasaData.explanation}</p>
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