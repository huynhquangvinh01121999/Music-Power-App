import styled from "styled-components";

const MenuSidebarStyled = styled.div`
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

export default MenuSidebarStyled;