import React from 'react';
import PropTypes from 'prop-types';

function WelcomePage(props) {
  // var myVar = setInterval(myTimer, 1000);

// function myTimer() {
//     var d = new Date();
//     document.getElementById("demo").innerHTML = d.toLocaleTimeString();
// }
  return (
    <div className="welcome">
      <h3>Welcome to smokeLess</h3>
      <p>We are here to help you keep track of how well you are doing at breaking your addiction to cigarettes.</p>
      <button onClick={props.onWelcomeConfirmation}>Go!</button>
      <p>A script on this page starts this clock:</p>

<p id="demo"></p>

    </div>
  );
}

WelcomePage.propTypes = {
  onWelcomeConfirmation: PropTypes.func
}

export default WelcomePage;
