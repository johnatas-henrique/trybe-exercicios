import React, { useContext } from 'react';
import { RedditContext } from '../contexts/RedditContext';

const renderOptions = (options) => (
  options.map((option) => (
    <option
      value={option}
      key={option}
    >
      {option}
    </option>
  ))
);

const Selector = () => {
  const { subReddit, selectSubreddit } = useContext(RedditContext);
  return (
    <span>
      <h1>{`Selected: ${subReddit}`}</h1>
      <select
        onChange={(e) => selectSubreddit(e.target.value)}
        value={subReddit}
      >
        <option hidden value="Escolha uma opção">
          Escolha uma opção
        </option>
        {renderOptions(['reactjs', 'frontend'])}
      </select>
    </span>
  );
};


export default Selector;
