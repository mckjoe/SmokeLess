import React from 'react';
import TimeAgo from 'react-timeago';
import PropTypes from 'prop-types';

const time=null;

function convertMS(ms) {
  var d, h, m, s;
  s = Math.floor(ms / 1000);
  m = Math.floor(s / 60);
  s = s % 60;
  h = Math.floor(m / 60);
  m = m % 60;
  d = Math.floor(h / 24);
  h = h % 24;
  return { d: d, h: h, m: m, s: s };
};

function Time(props){
  // if (props.smokerDetails.length > 0) {
  //   var stoppedSmokingDate =  props.smokerDetails[0].date;
  // }
  // console.log(stoppedSmokingDate);
  //
  // var time= convertMS(1111111111);      look at info to find the rest of the code to make this work.  start by converting stoppedSmokingDate into ms
  var time= convertMS(1111111111); 
  return (
    <div className='output'>
      <p>I quit smoking cigarettes</p>
      <p>{time.d} Days</p>
      <p>{time.h} Hours</p>
      <p>{time.m} Minutes</p>
      <p>{time.s} Seconds</p>
      <p>Ago...</p>
    </div>
  );
}

Time.propTypes = {
  smokerDetails: PropTypes.array
}

export default Time;
