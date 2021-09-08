import styled from "styled-components";

const TitleMainStyled = styled.div`
  color: white;
  font-size: 28px;
  color: rgb(203, 193, 225, 0.9);
  font-weight: 600;
  word-spacing: 2px;
  letter-spacing: 2px;
  line-height: 10px;
  @media (max-width: 320px) {
    font-size: 18px;
  }
  
  @media (max-width: 576px) and (min-width: 321px) {
    font-size: 26px;
  }
`;

export default TitleMainStyled;
