import React from 'react';
import { Link } from 'react-router-dom';

function NewSmokerForm(){
  return (
    <div className="newSmokerForm">
      <form>
        <input
          type='date'
          id='date'
          placeholder='Date You Quit'/><br />
        <input
          type='text'
          id='time'
          placeholder='Time of last cigarette'/><br />
        <input
          id='perDay'
          placeholder='How many cigarettes per day?'/><br />
        <input
          type='text'
          id='packPrice'
          placeholder='How much was a pack?'/><br />
        <input
          type='text'
          id='cigaretteTime'
          placeholder='How long per cigarette?'/><br />
        <input
          type='text'
          id='smokerTime'
          placeholder='How long did you smoke?'/><br />
        <Link to='details'><button type='submit'>submit</button></Link>
      </form>
    </div>
  );
}

export default NewSmokerForm;
