
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Index from './Components/Index';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"; 
class App extends React.Component {
state = {
  };

  render() {
    return(
       <Router>
        <Navbar />
         <Routes>
          <Route path='/' element={<Index />} exact></Route>
          <Route path='/contact' element={<Contact />} ></Route>
         </Routes>
       </Router>
    )
  }
}
export default App;