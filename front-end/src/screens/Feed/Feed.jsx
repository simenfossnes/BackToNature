import React, { isValidElement } from "react";
import { connect } from "react-redux";
// import PropTypes from 'prop-types';
import styles from './Feed.module.css';
import { store } from "../../App";
import { fetchTweetsStart } from "../../state/actions/twitterActions";
import isEmpty from "lodash.isempty";
import { List, Avatar } from 'antd';
class Feed extends React.Component {

  componentDidMount() {
    store.dispatch(fetchTweetsStart());
  }

  render() {
    const { loading, tweets } = this.props;
    return (
      <div className={styles.wrapper}>
        <h1>Feed</h1>
        
        {!(isEmpty(tweets) && !loading) && (
          <List
            dataSource={tweets.statuses}
            renderItem={item => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  avatar={<Avatar src={item.user.profile_image_url} />}
                  title={<a href="https://ant.design">{item.user.name}</a>}
                  description={item.text}
                />
                {item.entities.hasOwnProperty('media') && <img className={styles.image} src={item.entities.media[0].media_url}/>}
              </List.Item>
            )}
          />

        )}
      </div>
    );
  }
}

const TweetList = ({ tweets }) => (
  <div>
    {tweets.map(t => (
      <p>{t.text}</p>
    ))}
  </div>
);

Feed.propTypes = {
  // bla: PropTypes.string,
};

Feed.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = (state) => {
  return {
    loading: state.twitter.tweets.loading,
    tweets: state.twitter.tweets.data
  };
};
const mapDispatchToProps = undefined;

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
