import React from "react";
import AddHadith from "./AddHadees";
import HadithList from "./Hadees";
import Contact from "./Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";





const App = () => {

  return (
    <Router>
 
    <Navbar />
      <Routes>
      <Route path="/" exact element={<AddHadith />}></Route>
      <Route path="/allhadees" exact element={<HadithList />}></Route>
      <Route path="/contact" exact element={<Contact />}></Route>
      </Routes>
    </Router>
    
  );
};

export default App;
