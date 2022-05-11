import React from "react";
import { Tabs } from "antd";
import "../../assets/home.css";
import ChangePassword from "../../pages/changePassword";

const { TabPane } = Tabs;

const Sidebar = () => {
  return (
    <>
      <div className="sideBar">
          <ul>
          <li className="links">
              <a href="/profile" className="links">
                MY ACCOUNT
              </a>
            </li>
            <li className="links">
              <a href="/manage" className="links">
                MANAGE ACCOUNT
              </a>
            </li>
            <li className="links">
              &nbsp;&nbsp;&nbsp;&nbsp;<ChangePassword/>
              
            </li>
          </ul>
        </div>
        
       
    </>
  );
};

export default Sidebar;
