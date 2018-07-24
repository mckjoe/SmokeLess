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
    <p>Tell us a little about your habbit:</p>
      <form className="form" onSubmit={handleFormSubmission}>
        <input
          type='date'
          id='date'
          placeholder='Date of Last Cigarette'
          max="2018-07-27"
          required
          ref={(input) => {_date = input;}}/><span className="validity"></span>
          <br />
        <input
          type='time'
          id='time'
          placeholder='Time of last cigarette'
          required
          ref={(input) => {_time = input;}}/><span className="validity"></span>
          <br />
        <input
          id='perDay'
          placeholder='Cigarettes per Day'
          pattern="[0-9]"
          required
          ref={(input) => {_perDay = input;}}/><br />
        <input
          type='text'
          id='packPrice'
          placeholder='Price per Pack'
          pattern="[0-9]"
          required
          ref={(input) => {_packPrice = input;}}/><br />
        <input
          type='text'
          id='cigaretteTime'
          placeholder='Minutes per cigarette'
          pattern="[0-9]"
          required
          ref={(input) => {_cigaretteTime = input;}}/><br />
        <input
          type='text'
          id='smokerTime'
          placeholder='Years as a Smoker'
          pattern="[0-9]"
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
