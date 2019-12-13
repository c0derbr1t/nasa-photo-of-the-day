import React, { useState, useEffect} from "react";
import Header from "./components/Header/Header";
import Photo from "./components/Photo/Photo";
import Text from "./components/Text/Text";
import axios from "axios";
import { ChangeButton } from "./components/Styles";
import { token } from "./auth.js";
import "./App.css";
import { Page } from "./components/Styles";
import { todayDate } from "./components/Header/TodayDate";



function App() {

  const [nasaData, setNasaData] = useState([]);
  const [imgDate, setImgDate] = useState(todayDate);


  useEffect(() => {
      axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${token}&hd=true&date=${imgDate}`)
      .then(response => {
          console.log(response.data);
          setNasaData(response.data);
      })
      .catch(error => {
          console.log("There was an error in App: " + error);
      });
  }, [imgDate]);

  return (
    <Page className="page">
      <Header nasaData={nasaData}/>
      <div className="App">
        <ChangeButton outline color="secondary" size="lg" onClick={() => {
          setImgDate(prompt('What date would you like to view? Please use YYYY-MM-DD format.'))
        }}>
          View A Different Date
        </ChangeButton>
        
        <Photo nasaData={nasaData} />
        <Text nasaData={nasaData}/>
      </div>
    </Page>
    
  );
}

export default App;
