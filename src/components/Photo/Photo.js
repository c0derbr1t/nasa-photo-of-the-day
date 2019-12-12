import React from "react";

export default function Photo(props) {
    // const [photo, setPhoto] = useState([]);

    if (!props.nasaData.hdurl) return <h3>Loading...</h3>;
    return (


    // useEffect(() => {
    //     axios
    //     .get(`https://api.nasa.gov/planetary/apod?api_key=${token}`)
    //     .then(response => {
    //         // setNasaData = (response.data);
    //         console.log(response.data);
    //         setPhoto;
    //     })
    //     .catch(error => {
    //         console.log("There was an error in Photo: " + error);
    //     });
    // }, []);

        <div className="photo">
            <img src={props.nasaData.hdurl} alt="NASA" />
        </div>
    );
}

//// Display a loading message while the data is fetching
// if (!props.photoOfTheDay) return <h3>Loading...</h3>;

// // Display your component as normal after the data has been fetched
// return (
//   {* your normal JSX here *}
// );