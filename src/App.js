import React from "react";
import "./App.css";
import PhotoList from "./components/PhotoList";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import 'bootstrap/dist/css/bootstrap.min.css';

import space from "./assets/space.jpg";
function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${space})`, backgroundSize: '190rem'}}>

      <SearchBar />
      <PhotoList />
    <VideoList />
    </div>
  );
}

export default App;
