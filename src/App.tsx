import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Events from "./pages/events";
import Home from "./pages/HomePage";
import AddEvent from "./pages/AddEventPage";
import EventPage from "./components/eventPage";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddEvent />} />
          <Route path="/eventspage" element={<Events />} />
          <Route path="/eventspage/:eventID" element={<EventPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

//https://palettes.shecodes.io/palettes?page=6
