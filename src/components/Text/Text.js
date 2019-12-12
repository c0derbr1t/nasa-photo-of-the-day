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

export default Text;