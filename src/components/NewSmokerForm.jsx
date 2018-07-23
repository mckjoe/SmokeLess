import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewSmokerForm(props){
  let _date = null;
  let _time = null;
  let _perDay = null;
  let _packPrice = null;
  let _cigaretteTime = null;
  let _smokerTime = null;

  function handleFormSubmission(e) {
    e.preventDefault();
    props.onNewUserCreation({date: _date.value, time: _time.value, perDay: _perDay.value, packPrice: _packPrice.value, cigaretteTime: _cigaretteTime.value, smokerTime: _smokerTime.value, id: v4()})
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
          ref={(input) => {_date = input;}}/><br />
        <input
          type='time'
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
      <button className="nextButton"><Link to="details">Next</Link></button>
    </div>
  );
}

NewSmokerForm.propTypes = {
  onNewUserCreation: PropTypes.func
}

export default NewSmokerForm;
