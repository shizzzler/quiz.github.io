import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom"

//pages
import FirstPage from "./components/FirstPage";
import Create from "./components/Create";
import Quiz from "./components/Quiz"


function App() {



  return (
    <div className="App">
      <HashRouter basename={window.location.pathname || ''}>
        <Routes>        
          <Route path="/taking-quiz" element={<Quiz/>}/>
          <Route exact path="/" element={<FirstPage/>}/>
          <Route  path="/create" element={<Create/>}/>
        </Routes>

        
      </HashRouter>

      
    </div>
  );
}

export default App;
