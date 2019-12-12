import styled from "styled-components";


export const Head = styled.div`
    background-color: #696969; 
    color: #F0FFFF;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    height: 100px;
    margin-bottom: 2%;
`;

export const MainTitle = styled.h1`
    color: #E0FFFF;
    font-size: 3rem;
`;

export const Image = styled.img`
    width: 80%;
    margin: 0 auto;
    border-radius: 15px;
    border: 2px solid #696969;
`;

export const TextBox = styled.div`
    width: 80%;
    margin: 3% auto
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2%;
    border-radius: 15px;
    border: 2px solid #696969;
`;

export const InfoBox = styled.div`
    width: 175%;
    margin-right:10%;
`;

export const ImageTitle = styled.p`
    font-size: 1.4rem;
    font-weight: bold;
`;

export const ImageInfo = styled.p`
    font-size: 1.2rem;
`;

export const ImageExplanation = styled.p`
    width: 100%;
    text-align: left;
`;