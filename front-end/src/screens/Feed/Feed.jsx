import React from "react";
// import PropTypes from 'prop-types';
//import { Test } from './Feed.styles';
import { getPeopleTrafficPredictions } from '../../apis/OurOwn/requests';
import { getTweets } from '../../apis/Twitter/requests';

class Feed extends React.Component {
  state = {
    loaded: false,
    content: []
  };

  constructor(props) {
    super(props);
  }

  peopleTrafficCallback = (data) => {
    console.log(data);
  }

  async componentDidMount() {
    console.log('anything happened?');
    // call the api
    const data = await getTweets();
    const data2 = await getPeopleTrafficPredictions();
    console.log(data);
    console.log(data2)
    // getPeopleTrafficPredictions(this.peopleTrafficCallback);
  }

  render() {
    const { loaded } = this.state;
    return (
      <div className="FeedWrapper">
        <h1>Feed</h1>
      </div>
    );
  }
}

Feed.propTypes = {
  // bla: PropTypes.string,
};

Feed.defaultProps = {
  // bla: 'test',
};

export default Feed;
