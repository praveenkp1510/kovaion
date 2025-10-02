import React from 'react';
import './Sidebar.scss';
import { MdOutlineDashboard, MdOutlineAccountCircle, MdOutlineFileCopy } from 'react-icons/md';
import { IoIosCall, IoIosPeople, IoMdCalendar } from 'react-icons/io';
import { AiOutlineSetting, AiOutlineFolderOpen, AiOutlineUsergroupAdd } from 'react-icons/ai';
import { FaTasks } from 'react-icons/fa';
import { BiSolidDiscount } from 'react-icons/bi';


const sidebarItems = [
  { name: 'Dashboard', icon: MdOutlineDashboard, link: '#', active: false, type: 'link' },

  { name: 'Modules', type: 'heading' }, 

  { name: 'Leads', icon: AiOutlineUsergroupAdd, link: '#', active: true, type: 'link' }, 
  { name: 'Contacts', icon: IoIosPeople, link: '#', active: false, type: 'link' },
  { name: 'Accounts', icon: MdOutlineAccountCircle, link: '#', active: false, type: 'link' },
  { name: 'Deals', icon: BiSolidDiscount, link: '#', active: false, type: 'link' },
  { name: 'Calls', icon: IoIosCall, link: '#', active: false, type: 'link' },
  { name: 'Tasks', icon: FaTasks, link: '#', active: false, type: 'link' },
  { name: 'Meetings', icon: IoMdCalendar, link: '#', active: false, type: 'link' },
  { name: 'Documents', icon: MdOutlineFileCopy, link: '#', active: false, type: 'link' },
  { name: 'Projects', icon: AiOutlineFolderOpen, link: '#', active: false, type: 'link' },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">K</div>
      
      <div className="menu">
        {sidebarItems.map((item) => {
        
          if (item.type === 'heading') {
            return (
            
              <div key={item.name} className="menu-heading">
                <span>{item.name}</span>
              </div>
            );
          }
         
          return (
            <a
              key={item.name}
              href={item.link}
              className={`menu-item ${item.active ? 'active' : ''}`}
            >
              <item.icon className="icon" />
              <span>{item.name}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;