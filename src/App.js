
import React from 'react';
import {  Link, Route, Routes} from 'react-router-dom';
import './App.css';

import Books from './components/Books'
import Stores from './components/Stores';
import FrontPage from './pages/FrontPage';

function App() {
  return (
    <>
  
    <div className="wrapper">
   
      <FrontPage/>
        <nav>
          <ul>
            <li><Link to="/books">books</Link></li>
            <li><Link to="/stores">store</Link></li>
           
          </ul>
        </nav>
        <Routes>
          <Route path="/books" element={<Books />}/>
          
          <Route path="/stores" element={<Stores />}/>
         
          
        </Routes>
    
    </div>
    </>
  );
}

export default App;