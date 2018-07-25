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
        <label for="date">Date you stopped smoking:</label>
        <input
          type='datetime-local'
          id='date'
          max="2018-07-27"
          required
          ref={(input) => {_date = input;}}/><span className="validity"></span>
        <br />
        <label for="perDay">Cigarettes per day:</label>
        <input
          type="number"
          pattern="[0-9]{3}"
          id='perDay'
          placeholder='Example: 15'
          required
          ref={(input) => {_perDay = input;}}/><br />
        <label for="packPrice">Price per pack:</label>
        <input
          type="text"
          id='packPrice'
          placeholder='Example: 7.75'
          required
          ref={(input) => {_packPrice = input;}}/><br />
        <label for="cigaretteTime">Minutes per cigarette:</label>
        <input
          type='number'
          pattern="[0-9]{3}"
          id='cigaretteTime'
          placeholder='Example: 12'
          required
          ref={(input) => {_cigaretteTime = input;}}/><br />
        <label for="smokerTime">Years as a smoker:</label>
        <input
          type='number'
          pattern="[0-9]{3}"
          id='smokerTime'
          placeholder='Example: 12'
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
