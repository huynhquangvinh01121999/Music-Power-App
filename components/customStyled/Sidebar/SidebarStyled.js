import styled from "styled-components";

const SidebarStyled = styled.div`
  width: 17%;
  height: auto;
  background-color: #231b2e;
  display: inline-block;
  h3 {
    color: white;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export default SidebarStyled;
