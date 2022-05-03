
import React from 'react';
import {  Route, Routes} from 'react-router-dom';
import './App.css';

import BookList from './pages/Booklist';
import FrontPage from './pages/FrontPage';
import BookDetail from './pages/BookDetail';


function App() {
  return (
    <>
  
    <div className="wrapper">
   
   
        {/* <nav>
          <ul>
            <li><Link to="/books">books</Link></li>
            <li><Link to="/stores">store</Link></li>
           
          </ul>
        </nav> */}
        <Routes>
        <Route path="/" element={<FrontPage/>}/>
          <Route path="/Booklist" element={<BookList />}/>
          <Route path="/books/:id" element={<BookDetail/>}/>

         
          
        </Routes>
    
    </div>
    </>
  );
}

export default App;