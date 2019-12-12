import React from "react";
import Header from "./components/Header/Header";
import Photo from "./components/Photo/Photo";
import Text from "./components/Text/Text";
import "./App.css";

function App() {
  return (
    <div className="page">
      <Header />
      <div className="App">
        <Photo />
        <Text />
      </div>
    </div>
  );
}

export default App;
