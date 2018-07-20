import React from 'react';

function Time(){

  var time=setInterval(function(){ console.log(new Date()); }, 3000);
  return (
    <div>
      <p>{time}</p>
    </div>
  );
}

export default Time;
