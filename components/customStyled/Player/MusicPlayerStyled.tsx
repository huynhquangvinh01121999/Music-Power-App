import styled from "styled-components";

const MusicPlayerStyled = styled.div`
  position: fixed;
  bottom: 0;
  height: 105px;
  background-color: #120c1c;
  user-select: none;
  width: 100%;
  border: 1px solid #221633;

  

  @media screen and (max-width: 620px) {
    margin: 0px 5px 0px 0px;
    height: 180px;
    border: 1px solid #221633;
    width: 100%;
  }
`;

export default MusicPlayerStyled;
