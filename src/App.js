import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import TourList from "./components/TourList/index";

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <TourList></TourList>
    </React.Fragment>
  );
}

export default App;
