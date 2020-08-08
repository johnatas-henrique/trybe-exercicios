import React, { useContext } from 'react';
import { RedditContext } from '../contexts/RedditContext';

const Posts = () => {
  const { fetchResp, subReddit } = useContext(RedditContext);
  const correctArr = fetchResp.find((item) => item.subreddit === subReddit) || [];
  const { posts = [] } = correctArr;
  return (
    <div>
      <ul>
        {posts.map(({ id, title }) => <li key={id}>{title}</li>)}
      </ul>
    </div>
  );
};

export default Posts;
