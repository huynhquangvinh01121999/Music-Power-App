import styled from "styled-components";

const SidebarStyled = styled.div`
  width: 17%;
  height: auto;
  display: inline-block;
  h3 {
    color: white;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export default SidebarStyled;
