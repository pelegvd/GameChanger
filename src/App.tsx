import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Events from "./pages/events";
import Home from "./pages/HomePage";
import AddEvent from "./pages/AddEventPage";
import EventPage from "./components/eventPage";
import EventPage1 from "./pages/EventPage";
import Navigation from "./components/Navigation";

const App: React.FC = () => {
  
  return (
    <div className="app-container">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<AddEvent />} />
          <Route path='/events' element={<Events />} />
          <Route path='/events/:eventID' element={<EventPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

//https://palettes.shecodes.io/palettes?page=6
