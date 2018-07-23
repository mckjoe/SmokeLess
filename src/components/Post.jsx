import React from 'react';
import PropTypes from 'prop-types';
import profPic from "./../assets/images/profPic.png";

function Post(props) {
  return (
    <div className="shareMain">
      <div className="postingPerson">
      <img src={props.profilePic} />
      <p>{props.name}</p>
      </div>
      <div className="postBody">
        <h5>{props.quitDate}</h5>
        <p>{props.body}</p>
      </div>
    </div>
  );
}


Post.propTypes = {
  name: PropTypes.string,
  quitDate: PropTypes.string,
  body: PropTypes.string,
}

export default Post;
