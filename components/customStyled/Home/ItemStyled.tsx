import styled from "styled-components";

const ItemStyled = styled.div`
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
