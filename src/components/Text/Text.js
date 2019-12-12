import React from "react";
import { TextBox , InfoBox, ImageTitle, ImageInfo, ImageExplanation } from "../Styles";

const Text = (props) => {

    if (!props.nasaData) return <h3>Loading Information...</h3>

    return (
        <TextBox className="info">
            <InfoBox className="title-info">
                <ImageTitle>{props.nasaData.title}</ImageTitle>
                <ImageInfo>{props.nasaData.copyright}</ImageInfo>
                <ImageInfo>{props.nasaData.date}</ImageInfo>
            </InfoBox>
            <div className="explanation-info">
                <ImageExplanation>{props.nasaData.explanation}</ImageExplanation>
            </div>
        </TextBox>
    )
}

export default Text;