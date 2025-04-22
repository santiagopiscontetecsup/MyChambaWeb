"use client";

import React from 'react'

import '@/components/sidebar/styles/SideBar.css';
import { navList } from '@/data/sidebar/mockData'; 
import SidebarItem from './SidebarItem';

const SideBar: React.FC = () => {
  const mainItems = navList.filter(nav => nav.category === 'main');
  const otherItems = navList.filter(nav => nav.category === 'others');

  return (
    <aside id="sidebar" className="sidebar">
      <ul className='sidebar-nav' id="sidebar-nav">
        
        <li className='nav-heading'>Principal</li>
        
        {mainItems.map(nav => (
          <SidebarItem key={nav.id} nav={nav} />
        ))}

        <li className='nav-heading'>Otros</li>

        {otherItems.map(nav => (
          <SidebarItem key={nav.id} nav={nav} />
        ))}

      </ul>
    </aside>
  );
};

export default SideBar;