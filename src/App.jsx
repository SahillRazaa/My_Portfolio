import React from 'react'
import MainPage from './Pages/Main_Page';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Project_Desc from './Pages/Project_Desc';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element = {<MainPage/>}></Route>
        <Route exact path = '/project' element = {<Project_Desc/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
