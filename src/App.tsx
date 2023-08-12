import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Events from './pages/events';
import Home from './pages/HomePage';
import AddEvent from './pages/AddEventPage';
import EventPage from './components/eventPage';

interface Event {
  title: string;
  companyName: string;
  description: string;
}

const App: React.FC = () => {
  const events: Event[] = [
    {
      title: 'cleaning the beach',
      companyName: 'cleaner',
      description: 'cleaning palmahim beach'
    },
    {
      title: 'cleaning the forest',
      companyName: 'cleaner',
      description: 'cleaning palmahim forest'
    },
    {
      title: 'cleaning the city',
      companyName: 'cleaner',
      description: 'cleaning palmahim city'
    },
    {
      title: 'cleaning the city',
      companyName: 'cleaner',
      description: 'cleaning palmahim city'
    },
    {
      title: 'cleaning the city',
      companyName: 'cleaner',
      description: 'cleaning rishon lezion city'
    },
    
    
  ];

  return (
    <div className='app-container'>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<AddEvent />} />
          <Route path='/events' element={<Events events={events} />} />
          {/* <Route path='/events/:eventID' element={<EventPage />} */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
