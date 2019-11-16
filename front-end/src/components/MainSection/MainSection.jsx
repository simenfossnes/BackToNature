import React from "react";
import PropTypes from "prop-types";
import styles from "./MainSection.module.css";
import { Link } from "react-router-dom";
import { Menu, Icon, Tabs } from "antd";
import Profile from '../../screens/Profile';
import Chances from '../../screens/Chances';
import Feed from '../../screens/Feed';

const { TabPane } = Tabs;

const onTabClick = e => {
  console.log(e);
};

const MainSection = ({profile, chances, feed}) => {
  return (
    <div className={styles.wrapper}>
      <Tabs
        tabPosition="bottom"
        defaultActiveKey="chances"
        onChange={onTabClick}
        style={{ width: "100vw" }}
        tabBarStyle={{
          position: "relative",
          display: "flex",
          marginTop: 0,
          justifyContent: "center",
          background: "white"
        }}
      >
        <TabPane
          tab={
            <span>
              <Icon type="user" />
              Profile
            </span>
          }
          key="profile"
          style={{ height: "calc(100vh - 43px)", background: "white" }}
        >
          <Profile/>
        </TabPane>
        <TabPane
          tab={
            <span>
              <Icon type="heat-map" />
              Chances
            </span>
          }
          key="chances"
          style={{ height: "calc(100vh - 43px)" }}
        >
          <Chances/>
        </TabPane>
        <TabPane
          tab={
            <span>
              <Icon type="picture" />
              Feed
            </span>
          }
          key="feed"
          style={{ height: "calc(100vh - 43px)", background: "white" }}
        >
          <Feed/>
        </TabPane>
      </Tabs>
    </div>
  );
};

MainSection.propTypes = {
  profile: PropTypes.func,
  chances: PropTypes.func,
  feed: PropTypes.func
};

MainSection.defaultProps = {
  profile: <div>content of profile</div>,
  chances: <div>content of chances</div>,
  feed: <div>content of feed</div>
};

export default MainSection;
