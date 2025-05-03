"use client";

import React from "react";
import Link from "next/link";
import { NavItem } from "@/features/navItem/sidebarTypes";

type Props = {
  nav: NavItem;
};

const SidebarItem: React.FC<Props> = ({ nav }) => {
  return (
    <li className="nav-item">
      <Link href={nav.path} className="nav-link collapsed">
        <i className={nav.icon}></i>
        <span>{nav.name}</span>
      </Link>
    </li>
  );
};

export default SidebarItem;
