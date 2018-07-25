import React from 'react';
import TimeAgo from 'react-timeago';
import PropTypes from 'prop-types';

class Time extends React.Component {
  constructor(props){
    super(props);
  }

   convertMS(ms) {
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

  // componentDidMount = function() {
  //   this.countdown = setInterval(this.time, 1000);
  // }
  //
  // componentWillUnmount = function() {
  //   clearInterval(this.countdown)
  // }

  render() {
    if (this.props.smokerDetails.length > 0) {
      var stoppedSmokingDate =  this.props.smokerDetails[0].date;
      var stoppedSmokingTime = this.props.smokerDetails[0].time;
    }
    let quitTime = new Date(stoppedSmokingDate);
    let todaysDate = new Date();
    let timeEllapsed = todaysDate - quitTime;
    var time = this.convertMS(timeEllapsed);

    return (
      <div>
        <div className='output'>
        <p>I quit smoking cigarettes</p>
        <p>{time.d} Days</p>
        <p>{time.h} Hours</p>
        <p>{time.m} Minutes</p>
        <p>{time.s} Seconds</p>
        <p>Ago...</p>
        </div>
      </div>
    );
  }
}

Time.propTypes = {
  smokerDetails: PropTypes.array
}

export default Time;
