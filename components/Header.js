import React from "react";
import styled from "styled-components";

const HeaderStyled = styled.div`
  width: 100%;
  padding: 20px;
  }
`;

const SearchStyled = styled.div`
    display:inline-block;
    width:45%;
    input {
        border-radius: 25px;
        padding: 15px;
        width: 500px;
        background-color: #2f2739;
        border: none;
        color: white;
        outline: none;
        letter-spacing: 1px;
        font-size: 15px;
        ::placeholder {
        color: white;
    }
      @media screen and (max-width: 420px) {
        width:320px;
        input {
          border-radius: 5px;
          padding:5px;
          background-color: #2f2739;
          border: none;
          color: white;
          outline: none;
          letter-spacing: 1px;
          font-size: 15px;
          ::placeholder {
          color: white;
      }
    }
`;

const LogoStyled = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
`;

export default function Header() {
  return (
    <HeaderStyled>
      <SearchStyled>
        <input type="text" placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV..." />
      </SearchStyled>
    </HeaderStyled>
  );
}
