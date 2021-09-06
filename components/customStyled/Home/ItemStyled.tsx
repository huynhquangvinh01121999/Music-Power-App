import styled from "styled-components";

const ItemStyled = styled.div`
  cursor: pointer;
  width: 1100px;
  color: white;
  padding: 12px;
  margin: 0 auto;
  margin-bottom: 10px;
  border-bottom: 0.2px solid #393243;
  :hover {
    background-color: #393243;
    border-radius: 5px;
  }
  .numberItem {
    font-size: 28px;
    font-weight: 700;
    opacity: 0.7;
    white-space: nowrap;
    :after {
      content: "-";
      margin-left: 30px;
      margin-right: 20px;
      color: #ced5e3;
    }
  }
  .imageItem {
    margin-top: 20px;
    border-radius: 5px;
  }
  .description {
    display: inline-block;
    width: 600px;
    margin-left: 20px;
    @media screen and (max-width: 420px) {
      width: 200px;
      word-wrap: break-word !important;
    }
  }
  .music_song,
  .creator {
    display: block;
  }
  .music_song {
    font-size: 18px;
    font-weight: 600;
  }
  .creator {
    color: #ced5e3;
    @media screen and (max-width: 420px) {
      width: 200px;
      word-wrap: break-word !important;
    }
  }
`;

export default ItemStyled;
