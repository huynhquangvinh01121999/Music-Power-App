import styled from "styled-components";

const ImageStyled = styled.div`
  width: 180px;
  height: 180px;
  margin: 15px auto;
  background-color: white;
  border-radius: 15px;
  cursor: pointer;
  @media screen and (max-width: 462px) {
    margin-left: 0px;
  }
  @media screen and (max-width: 767px) {
    margin-left: 30px;
  }
`;

export default ImageStyled;
