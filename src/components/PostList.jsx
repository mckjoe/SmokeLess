import React from 'react';
import Post from './Post';
import PostForm from './PostForm';
import PropTypes from 'prop-types';

function PostList(props) {
  return (
    <div>
      <PostForm onNewPostCreation={props.onNewPostCreation}/>
      {props.postList.map((post) =>
        <Post  name={post.name}
          profilePic= {post.profilePic}
          quitDate={post.quitDate}
          body={post.body}
          key={post.key} />
      )}
    </div>
  );
}

PostList.propTypes = {
  onNewPostCreation: PropTypes.func,
  postList: PropTypes.array
}

export default PostList;
