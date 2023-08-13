import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Link to='add'>
        <button className='btn-add-event'>
          Add Event
        </button>
      </Link>
    </>
  );
}

export default Home;