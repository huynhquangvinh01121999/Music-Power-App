import styled from "styled-components";

const MenuSidebarStyled = styled.div`
  color: white;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  ul {
    padding: 5px 0px 8px 23px;
    transition: all 0.5s;
  }
  ul li {
    list-style: none;
  }
  ul:hover {
    background-color: #393243;
    border-radius: 10px;
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
`;

export default MenuSidebarStyled;
