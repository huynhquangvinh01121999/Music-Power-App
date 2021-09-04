import styled from "styled-components";

const SectionStyled = styled.div`
  width: 83%;
  float: right;
  height: 100vh;
  background-color: #170f23;
  display: inline-block;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 3px;
    background-color: #170f23;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #f5f5f5;
  }
  @media screen and (max-width: 420px) {
    width: 100%;
  }
`;

export default SectionStyled;
