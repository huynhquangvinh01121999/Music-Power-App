import React from "react";
import Link from "next/link";
import styled from "styled-components";

const SidebarStyled = styled.div`
  width: 17%;
  height: auto;
  background-color: #231b2e;
  display: inline-block;
  h3 {
    color: white;
  }
  @media screen and (max-width: 420px) {
    display: none;
  }
`;
const MenuStyled = styled.div`
  color: white;
  font-weight: 600;
  font-size: 17px;
  cursor: pointer;
  ul {
    padding: 10px 10px 10px 45px;
  }
  ul li {
    list-style: none;
  }
  ul:hover {
    background-color: #393243;
  }
  .menu_item_link {
    color: #dadada;
  }
  .cross_line {
    border-bottom: 0.1px solid #393243;
  }
  .spacing {
    height: 1000px;
  }
  .userInfo {
    margin: 0 auto;
    padding: 1px;
    border-radius: 20px;
    background-color: #7200a1;
    h4,
    h3 {
      text-align: center;
      color: #f2eaea;
    }
    .name_info {
      margin-top: -20px;
    }
  }
`;

const TitleStyled = styled.div`
  text-align: center;
  h3 {
    color: #51bce7;
    font-size: 30px;
    letter-spacing: 1px;
  }
`;

export default function Sidebar() {
  return (
    <>
      <SidebarStyled>
        <TitleStyled>
          <h3>Music Power</h3>
        </TitleStyled>
        <MenuStyled>
          <div className="userInfo">
            <h4>Xin chào:</h4>
            <h3 className="name_info">Chào mừng đến với Music Power</h3>
          </div>
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
          <ul>
            <li>
              <Link href="/" passHref prefetch={false}>
                <span className="menu_item_link">Theo dõi</span>
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
          <ul>
            <li>
              <Link href="/" passHref prefetch={false}>
                <span className="menu_item_link">Top 100</span>
              </Link>
            </li>
          </ul>
          <div className="spacing"></div>
        </MenuStyled>
      </SidebarStyled>
    </>
  );
}
