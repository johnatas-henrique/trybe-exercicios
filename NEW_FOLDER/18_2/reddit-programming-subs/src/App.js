import React from 'react';
import { RedditProvider } from './contexts/RedditContext';
import Main from './components/Main';

const App = () => (
  <RedditProvider>
    <Main />
  </RedditProvider>
);

export default App;
