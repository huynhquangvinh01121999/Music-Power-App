import styled from "styled-components";

const ImageStyled = styled.div`
  width: 180px;
  height: 180px;
  margin: 15px auto;
  background-color: white;
  border-radius: 15px;
  cursor: pointer;
  @media screen and (max-width: 420px) {
    margin-left: -15px;
  }
  @media screen and (max-width: 767px) and (min-width: 421px) {
    margin-left: 20px;
  }
`;

export default ImageStyled;
