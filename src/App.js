import React from "react";
import "./App.css";
import PhotoList from "./components/PhotoList";
import SearchBar from "./components/SearchBar";
import VideoCard from "./components/VideoCard";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <SearchBar />
      <PhotoList />
    <VideoCard />
    </div>
  );
}

export default App;
