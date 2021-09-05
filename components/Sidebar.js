import React from "react";
import Link from "next/link";
import SidebarStyled from "./customStyled/Sidebar/SidebarStyled";
import TitleSidebarStyled from "./customStyled/Sidebar/TitleSidebarStyled";
import MenuSidebarStyled from "./customStyled/Sidebar/MenuSidebarStyled";

export default function Sidebar() {
  return (
    <>
      <SidebarStyled>
        <TitleSidebarStyled>
          <h3>Music Power</h3>
        </TitleSidebarStyled>
        <MenuSidebarStyled>
          <div className="userInfo">
            <h4>Xin chào:</h4>
            <h3 className="name_info">Chào mừng đến với Music Power</h3>
          </div>
          <ul>
            <li>
              <Link href="/" passHref prefetch={false}>
                <span className="menu_item_link">Top 100</span>
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/" passHref prefetch={false}>
                <span className="menu_item_link">Cá nhân</span>
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/" passHref prefetch={false}>
                <span className="menu_item_link">Khám phá</span>
              </Link>
            </li>
          </ul>
          <div className="cross_line"></div>
          <ul>
            <li>
              <Link href="/" passHref prefetch={false}>
                <span className="menu_item_link">Nhạc mới</span>
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/" passHref prefetch={false}>
                <span className="menu_item_link">Thể loại</span>
              </Link>
            </li>
          </ul>
          <div className="spacing"></div>
        </MenuSidebarStyled>
      </SidebarStyled>
    </>
  );
}
