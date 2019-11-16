import React from 'react';
// import PropTypes from 'prop-types';
import style from './Profile.module.css';
import { Typography, Button, Avatar  } from 'antd';

// extracting title component
const { Title, Text } = Typography;

const Profile = (props) => (
  <div className={style.wrapper}>
    <Avatar style={{marginBottom: '20px'}} size={128} icon="user" />
    <Title level={4} style={{marginBottom: '12px'}}>The Nice Woman</Title>
    <Text><Button>Sign Up</Button> to save preferences.</Text>
  </div>
);

Profile.propTypes = {
  // bla: PropTypes.string,
};

Profile.defaultProps = {
  // bla: 'test',
};

export default Profile;
