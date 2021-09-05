import styled from "styled-components";

const ImageStyled = styled.div`
  width: 180px;
  height: 180px;
  margin: 30px 8px 30px 20px;
  background-color: white;
  display: inline-block;
  border-radius: 15px;
  cursor: pointer;
  @media screen and (max-width: 620px) {
    margin: 20px 5px 25px 20px;
  }
`;

export default ImageStyled;
