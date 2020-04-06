import React, { useContext } from 'react';
import Posts from './Posts';
import Selector from './Selector';
import { RedditContext } from '../contexts/RedditContext';

const Main = () => {
  /*   componentDidMount() {
      const { dispatch, selectedSubreddit } = this.props;
      dispatch(fetchPostsIfNeeded(selectedSubreddit));
    }

    componentDidUpdate(prevProps) {
      const { props } = this;

      if (prevProps.selectedSubreddit !== props.selectedSubreddit) {
        const { dispatch, selectedSubreddit } = props;
        dispatch(fetchPostsIfNeeded(selectedSubreddit));
      }
    } */

  const {
    isFetching,
    isEmpty,
    renderRefreshButton,
    renderLastUpdatedAt,
  } = useContext(RedditContext);

  return (
    <div>
      {/* <div>
        Main Class Context:
        {JSON.stringify(useContext(RedditContext))}
      </div> */}
      <Selector />
      <div>
        {renderLastUpdatedAt()}
        {renderRefreshButton()}
      </div>
      {isFetching && <h2>Loading...</h2>}
      {!isFetching && isEmpty && <h2>Empty.</h2>}
      {!isFetching && !isEmpty && <Posts />}
    </div>
  );
};

export default Main;
