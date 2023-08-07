import React from 'react';
import '../../App.css';
import '../../stylesheets/Input.css';
import '../../stylesheets/Button.css';

function AddEvent() {
    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
      <div>
         <form onSubmit={(e) => handleSubmit(e)}>
        <div>
            <label>Event Name</label>
        <input name='eventName'
        placeholder='name' />
        </div>
        <div>
        <label>Description</label>
        <input name='description'
        placeholder='description' />
        </div>
        <div>
        <label>Location</label>
        <input name='location'
        placeholder='location' />
        </div>
        <div>
        <button type='submit'>Add</button>
        </div>
         </form>
         </div>
    );
  }
  
  export default AddEvent;