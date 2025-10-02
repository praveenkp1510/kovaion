import React from 'react';
import './Topbar.scss';
import { IoIosSearch, IoIosNotificationsOutline, IoIosHelpCircleOutline } from 'react-icons/io';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="search-box">
        <IoIosSearch className="search-icon" />
        <input type="text" placeholder="Search..." />
      </div>

      <div className="topbar-right">
        <IoIosHelpCircleOutline className="icon" />
        <IoIosNotificationsOutline className="icon" />
        <div className="user-info">
          <div className="avatar">N</div>
          <span>Hi, Nelson</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;