import React from "react";
import faker from 'faker'

const CommentsList = (props) => {
  return (
    <div className="comments-list">
      <div className="ui comments">
        <h3 className="ui dividing header">Comments</h3>


        <div className="comment">
          <a className="avatar">
            <img src={faker.image.avatar()} />
          </a>
          <div className="content">
            <a className="author">Matt</a>
            <div className="metadata">
              <span className="date">Today at 5:42PM</span>
            </div>
            <div className="text">How artistic!</div>
          </div>
        </div>
      
      
      </div>
    </div>
  );
};

export default CommentsList;
