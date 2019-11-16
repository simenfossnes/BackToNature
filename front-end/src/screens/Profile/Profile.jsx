import React from 'react';
// import PropTypes from 'prop-types';
import style from './Profile.module.css';
import { Typography  } from 'antd';

// extracting title component
const { Title } = Typography;

const Profile = (props) => (
  <div className={style.wrapper}>
    <Title level={4}>The Nice Woman</Title>
    <p>"This woman was so nice. Ohh, joj."</p>
  </div>
);

Profile.propTypes = {
  // bla: PropTypes.string,
};

Profile.defaultProps = {
  // bla: 'test',
};

export default Profile;
