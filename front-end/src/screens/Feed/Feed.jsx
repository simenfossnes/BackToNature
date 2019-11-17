import React from "react";
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
//import { Test } from './Feed.styles';
import { store } from "../../App";
import { fetchTweetsStart } from "../../state/actions/twitterActions";
import isEmpty from 'lodash.isempty';

const Feed = props => {
  store.dispatch(fetchTweetsStart());
  const { loading, tweets } = props;
  return (
    <div className="FeedWrapper">
      <h1>Feed</h1>
      {loading && 'loading...'}
      {!(isEmpty(tweets) && !loading) && <TweetList tweets={tweets.statuses}/>}
    </div>
  );
};

const TweetList = ({tweets}) => (
  <div>
    {tweets.map(t => <p>{t.text}</p>)}
  </div>
)

Feed.propTypes = {
  // bla: PropTypes.string,
};

Feed.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.twitter.tweets.loading,
    tweets: state.twitter.tweets.data
  };
};
const mapDispatchToProps = undefined;

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
