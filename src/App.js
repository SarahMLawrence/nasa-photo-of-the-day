import React from "react";
import "./App.css";
import PhotoList from "./components/PhotoList";
import SearchBar from "./components/SearchBar";



function App() {
  return (
    <div className="App">
      <PhotoList />
     <SearchBar />
    </div>
  );
}

export default App;
