import React from "react";
import "./App.css";
import PhotoList from "./components/PhotoList";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <SearchBar />
      <PhotoList />
    <VideoList />
    </div>
  );
}

export default App;
