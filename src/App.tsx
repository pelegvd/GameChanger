import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/HomePage';
import AddEvent from './components/pages/AddEventPage';

function App() {
  return (
    <div className="container">
     <Router>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<AddEvent />} />
          {/*<Route path='/list' element={<ListEvents />} />
          
          <Route path='/edit/:id' element={<EditEventPage />} />*/}
          </Routes>     
     </Router>
    </div>
  );
}

export default App;
