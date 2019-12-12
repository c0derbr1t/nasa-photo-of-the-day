import React, { useState, useEffect} from "react";
import Header from "./components/Header/Header";
import Photo from "./components/Photo/Photo";
import Text from "./components/Text/Text";
import axios from "axios";
import { token } from "./auth.js";
import "./App.css";


function App() {

  const [nasaData, setNasaData] = useState([]);



  useEffect(() => {
      axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${token}&hd=true`)
      .then(response => {
          console.log(response.data);
          setNasaData(response.data);
      })
      .catch(error => {
          console.log("There was an error in App: " + error);
      });
  }, []);

  

  return (
    <div className="page">
      <Header nasaData={nasaData}/>
      <div className="App">
        <Photo nasaData={nasaData} />
        <Text nasaData={nasaData}/>
      </div>
    </div>
  );
}

export default App;
