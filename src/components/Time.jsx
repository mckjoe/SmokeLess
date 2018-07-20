import React from 'react';


function Time(){
  let now= null;
  let countTo= null;
  let difference= null;
  let years= null;
  let months= null;
  let weeks= null;
  let days= null;
  let hours= null;
  let mins= null;
  let secs= null;
  window.onload=function() {
  // Month,Day,Year,Hour,Minute,Second
  upTime('march,02,2017,19:04:00'); // ****** Change this line!
}
function upTime(countTo) {

  now = new Date();
  countTo = new Date(countTo);
  difference = (now-countTo);

  years=Math.floor(difference/(60*60*1000*24*7*4*12)*1);
  days=Math.floor(difference/(60*60*1000*24)*1);
  hours=Math.floor((difference%(60*60*1000*24))/(60*60*1000)*1);
  mins=Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
  secs=Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);

  document.getElementById('years').firstChild.nodeValue = years;
  document.getElementById('days').firstChild.nodeValue = days;
  document.getElementById('hours').firstChild.nodeValue = hours;
  document.getElementById('minutes').firstChild.nodeValue = mins;
  document.getElementById('seconds').firstChild.nodeValue = secs;

  clearTimeout(upTime.to);
  upTime.to=setTimeout(function(){ upTime(countTo); },1000);
}
  return (
    <div id="countup">
  <p>It's been</p>
  <p id="years">00</p>
  <p className="timeRefDays">years</p>
  <p id="days">00</p>
  <p className="timeRefDays">days</p>
  <p id="hours">00</p>
  <p className="timeRefHours">hours</p>
  <p id="minutes">00</p>
  <p className="timeRefMinutes">minutes</p>
  <p id="seconds">00</p>
  <p className="timeRefSeconds">second</p>
</div>
  );
}

export default Time;
