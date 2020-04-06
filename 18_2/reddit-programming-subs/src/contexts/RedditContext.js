import React, { createContext, useState } from 'react';
import getPostsBySubreddit from '../services/redditAPI';

const RedditContext = createContext();

const RedditProvider = ({ children }) => {
  const [subReddit, setSubReddit] = useState('Escolha uma opção');
  const [isFetching, setIsFetching] = useState(false);
  const [fetchResp, setFetchResp] = useState([]);
  // const [shouldRefreshSubreddit, setShouldRefreshSubreddit] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);

  const renderLastUpdatedAt = () => {
    const correctArr = fetchResp.find(item => item.subreddit === subReddit) || [];
    const lastUpdated = correctArr.receivedAt || 'Never';
    return (
      <span>
        {`Last updated at 
        ${lastUpdated === 'Never' ? 'Never' : new Date(lastUpdated).toLocaleTimeString()}. `}
      </span>
    );
  };

  const renderRefreshButton = () => (
    <button
      type="button"
      onClick={(event) => handleRefreshClick(event)}
      disabled={isFetching}
    >
      Refresh
    </button>
  );

  const receivePostsSuccess = (subreddit, json) => {

    const arrFetch = [...fetchResp];
    const actual = arrFetch.filter((item) => subreddit !== item.subreddit);
    const answer = {
      subreddit,
      posts: json.data.children.map((child) => child.data),
      receivedAt: Date.now(),
    };
    setFetchResp([...actual, answer]);
    if (answer.posts.length > 0) setIsEmpty(false);
    setIsFetching(false);
  };

  const receivePostsFailure = (subreddit, error) => {
    const sliceFetch = [...fetchResp];
    sliceFetch.slice(subreddit);
    const answer = {
      error,
      subreddit,
    };
    setFetchResp([...sliceFetch, answer]);
    setIsFetching(false);
  };

  const fetchPosts = (subreddit) => (
    getPostsBySubreddit(subreddit)
      .then(
        (posts) => receivePostsSuccess(subreddit, posts),
        (error) => receivePostsFailure(subreddit, error.message),
      )
  );


  const selectSubreddit = (subreddit) => {
    setSubReddit(subreddit);
    setIsFetching(true);
    fetchPosts(subreddit);
  };

  const handleRefreshClick = (event) => {
    event.preventDefault();
    setIsFetching(true);
    fetchPosts(subReddit);
  };

  const context = {
    subReddit,
    isFetching,
    // shouldRefreshSubreddit,
    isEmpty,
    fetchResp,
    selectSubreddit,
    renderRefreshButton,
    renderLastUpdatedAt,
    fetchPosts,
  };

  return (
    <RedditContext.Provider value={context}>
      {children}
    </RedditContext.Provider>
  );
};

export { RedditContext, RedditProvider };
