import React from 'react';
import { Link } from 'react-router-dom';

function NewSmokerForm(){
  let _date = null;
  let _time = null;
  let _perDay = null;
  let _packPrice = null;
  let _cigaretteTime = null;
  let _smokerTime = null;

  function handleFormSubmission(e) {
    e.preventDefault();
    console.log(_date.value);
    console.log(_time.value);
    console.log(_perDay.value);
    console.log(_packPrice.value);
    console.log(_cigaretteTime.value);
    console.log(_smokerTime.value);
    _date.value = '';
    _time.value = '';
    _perDay.value = '';
    _packPrice.value = '';
    _cigaretteTime.value = '';
    _smokerTime.value = '';
  }

  return (
    <div className="newSmokerForm">
      <form onSubmit={handleFormSubmission}>
        <input
          type='date'
          id='date'
          placeholder='Date You Quit'
          ref={(input) => {_date = input;}}/>/><br />
        <input
          type='text'
          id='time'
          placeholder='Time of last cigarette'
          ref={(input) => {_time = input;}}/><br />
        <input
          id='perDay'
          placeholder='How many cigarettes per day?'
          ref={(input) => {_perDay = input;}}/><br />
        <input
          type='text'
          id='packPrice'
          placeholder='How much was a pack?'
          ref={(input) => {_packPrice = input;}}/><br />
        <input
          type='text'
          id='cigaretteTime'
          placeholder='How long per cigarette?'
          ref={(input) => {_cigaretteTime = input;}}/><br />
        <input
          type='text'
          id='smokerTime'
          placeholder='How long did you smoke?'
          ref={(input) => {_smokerTime = input;}}/><br />
          <button type='submit'>submit</button>
      </form>
    </div>
  );
}

export default NewSmokerForm;
