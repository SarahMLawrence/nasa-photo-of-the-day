import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import NasaPhoto from "./components/NasaPhoto";
//import SearchBar from "../components/SearchContainer";

function App() {
  return (
    <div className="App">
      <SearchBar/>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
