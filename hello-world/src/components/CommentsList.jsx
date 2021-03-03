import React from "react";
import faker from 'faker'


const CommentsItem = props => {

  //const {comment} = props;
  const comment = props.comment;

  return (
    <div className="comment">
    <a className="avatar">
      <img src={comment.avatar} />
    </a>
    <div className="content">
      <a className="author">{comment.name}</a>
      <div className="metadata">
        <span className="date">{comment.date.toLocaleDateString()}</span>
      </div>
      <div className="text">{comment.comment}</div>
    </div>
  </div>
  )
}


const CommentsList = props => {

  //props.comments


  return (
    <div className="comments-list">
      <div className="ui comments">
        <h3 className="ui dividing header">Comments</h3>
        {
          props.comments.map(
            i => <CommentsItem comment={i}/>
          )
        }
      </div>
    </div>
  );
};

export default CommentsList;
