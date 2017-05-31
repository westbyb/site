import React from 'react';

import './Post.scss';

class Post extends React.Component {
  render() {
    return (
      <div className="card post">
        <div className="card-block">
          <h4 className="card-title">Card title</h4>
          This is some text within a card block.
        </div>
      </div>
    );
  }
}

export default Post;
