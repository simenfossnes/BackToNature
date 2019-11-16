import React from "react";
import PropTypes from "prop-types";
import styles from "./NavMenu.module.css";
import { Link } from "react-router-dom";
import { Menu, Icon, Tabs } from "antd";

const { TabPane } = Tabs;

class NavMenu extends React.Component {
  state = {
    current: "chances"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <Tabs
          tabPosition="bottom"
          defaultActiveKey="2"
          onChange={this.handleClick}
          style={{width: '100vw'}}
          tabBarStyle={{display: 'flex', justifyContent: 'center'}}
        >
          <TabPane
            tab={
              <span>
                <Icon type="user" />
                Profile
              </span>
            }
            key="1"
            style={{}}
          >
            Content of Tab Pane 1
          </TabPane>
          <TabPane
            tab={
              <span>
                <Icon type="heat-map" />
                Chances
              </span>
            }
            key="2"
            style={{background: 'white', height: '100%'}}
          >
            Content of Tab Pane 2
          </TabPane>
          <TabPane
            tab={
              <span>
                <Icon type="picture" />
                Feed
              </span>
            }
            key="3"
          >
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

// class NavMenu extends React.Component {
//   state = {
//     current: "mail"
//   };

//   handleClick = e => {
//     console.log("click ", e);
//     this.setState({
//       current: e.key
//     });
//   };

//   render() {
//     return (
//       <div className={styles.wrapper}>
//         <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
//           <Menu.Item key="profile">
//             <Icon type="profile" />
//             Profile
//           </Menu.Item>
//           <Menu.Item key="chances">
//             <Icon type="chances" />
//             Chances
//           </Menu.Item>
//           <Menu.Item key="feed">
//             <Icon type="feed" />
//             Feed
//           </Menu.Item>
//         </Menu>
//       </div>
//     );
//   }
// }

// const NavMenu = (props) => (
//   <div className={styles.wrapper}>
//     <ul>
//       <li>
//         <Link to="/profile">Profile</Link>
//       </li>
//       <li>
//         <Link to="/chances">Chances</Link>
//       </li>
//       <li>
//         <Link to="/feed">Feed</Link>
//       </li>
//     </ul>
//   </div>
// );

NavMenu.propTypes = {
  // bla: PropTypes.string,
};

NavMenu.defaultProps = {
  // bla: 'test',
};

export default NavMenu;
