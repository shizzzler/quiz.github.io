import React from "react";
//import { useState, useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

//pages
import FirstPage from "./components/FirstPage";
import Create from "./components/Create";
import Quiz from "./components/Quiz"


function App() {



  return (
    <div className="App">
      <BrowserRouter>
        <Routes>        
          <Route path="/taking-quiz" element={<Quiz/>}/>
          <Route exact path="/" element={<FirstPage/>}/>
          <Route  path="/create" element={<Create/>}/>
        </Routes>

        
      </BrowserRouter>

      
    </div>
  );
}

export default App;
