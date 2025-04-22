"use client";

import React from "react";
import { NavItem } from "@/features/navItem/sidebarTypes";

type Props = {
    nav: NavItem;
}

const SidebarItem: React.FC<Props> = ({ nav }) => {
    return (
        <li className="nav-item">
          <a className="nav-link collapsed" href="#">
            <i className={nav.icon}></i>
            <span>{nav.name}</span>
          </a>
        </li>
      );
    };

export default SidebarItem;