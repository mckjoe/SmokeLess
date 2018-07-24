import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewSmokerForm(props){
  let _date = null;
  let _perDay = null;
  let _packPrice = null;
  let _cigaretteTime = null;
  let _smokerTime = null;

  function handleFormSubmission(e) {
    e.preventDefault();
    props.onNewUserCreation({date: _date.value, perDay: _perDay.value, packPrice: _packPrice.value, cigaretteTime: _cigaretteTime.value, smokerTime: _smokerTime.value, id: v4()})
    _date.value = '';
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
          type='datetime-local'
          id='date'
          placeholder='Date of Last Cigarette'
          max="2018-07-27"
          required
          ref={(input) => {_date = input;}}/><span className="validity"></span>
          <br />
        <input
          type="number"
          pattern="[0-9]{3}"
          id='perDay'
          placeholder='Cigarettes per Day'
          required
          ref={(input) => {_perDay = input;}}/><br />
        <input
          type="text"
          id='packPrice'
          placeholder='Price per Pack'
          required
          ref={(input) => {_packPrice = input;}}/><br />
        <input
          type='number'
          pattern="[0-9]{3}"
          id='cigaretteTime'
          placeholder='Minutes per cigarette'
          required
          ref={(input) => {_cigaretteTime = input;}}/><br />
        <input
          type='number'
          pattern="[0-9]{3}"
          id='smokerTime'
          placeholder='Years as a Smoker'
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
