import React from "react";
import Link from "next/link";
import SidebarStyled from "./customStyled/Sidebar/SidebarStyled";
import TitleSidebarStyled from "./customStyled/Sidebar/TitleSidebarStyled";
import MenuSidebarStyled from "./customStyled/Sidebar/MenuSidebarStyled";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import AdjustIcon from "@material-ui/icons/Adjust";
import CategoryIcon from "@material-ui/icons/Category";

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
                <span className="menu_item_link">
                  <StarBorderIcon
                    color="primary"
                    style={{
                      position: "relative",
                      top: 5,
                      left: -2,
                      marginRight: 7,
                    }}
                  />
                  Top 100
                </span>
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/" passHref prefetch={false}>
                <span className="menu_item_link">
                  <SupervisedUserCircleIcon
                    color="primary"
                    style={{
                      position: "relative",
                      top: 5,
                      left: -2,
                      marginRight: 7,
                    }}
                  />
                  Cá nhân
                </span>
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/" passHref prefetch={false}>
                <span className="menu_item_link">
                  <AdjustIcon
                    color="primary"
                    style={{
                      position: "relative",
                      top: 5,
                      left: -2,
                      marginRight: 7,
                    }}
                  />
                  Khám phá
                </span>
              </Link>
            </li>
          </ul>
          <div className="cross_line"></div>
          <ul>
            <li>
              <Link href="/" passHref prefetch={false}>
                <span className="menu_item_link">
                  <LibraryMusicIcon
                    color="primary"
                    style={{
                      position: "relative",
                      top: 5,
                      left: -2,
                      marginRight: 7,
                    }}
                  />
                  Nhạc mới
                </span>
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/" passHref prefetch={false}>
                <span className="menu_item_link">
                  <CategoryIcon
                    color="primary"
                    style={{
                      position: "relative",
                      top: 5,
                      left: -2,
                      marginRight: 7,
                    }}
                  />
                  Thể loại
                </span>
              </Link>
            </li>
          </ul>
          <div className="spacing"></div>
        </MenuSidebarStyled>
      </SidebarStyled>
    </>
  );
}
