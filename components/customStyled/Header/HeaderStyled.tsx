import styled from "styled-components";

export const HeaderStyled = styled.div`
  width: 100%;
  padding: 20px;
  }
`;

export const SearchStyled = styled.div`
  display: inline-block;
  width: 45%;
  input {
    border-radius: 25px;
    padding: 15px;
    width: 500px;
    background-color: #432275;
    border: none;
    color: white;
    outline: none;
    letter-spacing: 1px;
    font-size: 15px;
    ::placeholder {
      color: white;
    }
  }
  @media screen and (max-width: 420px) {
    width: 320px;
    input {
      width: 320px;
    }
  }

  @media screen and (max-width: 767px) and (min-width: 421px) {
    width: 767px;
    input {
      width: 390px;
    }
  }
  .dropdown-search_content {
    border-top: 1px solid #432275;
    position: absolute;
    background-color: #432275;
    min-width: 160px;
    width: 465px;
    margin-left: 18px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    cursor: pointer;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    height: 300px;
    overflow-x: hidden;
    overflow-y: auto;
    ::-webkit-scrollbar {
      width: 2px;
      background-color: #170f23;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #f5f5f5;
    }
    @media screen and (max-width: 420px) {
      width: 280px;
    }

    @media screen and (max-width: 767px) and (min-width: 420px) {
      width: 353px;
    }
  }

  .dropdown-search_content div {
    color: white;
    padding: 12px 12px;
    text-decoration: none;
    display: block;
  }

  .dropdown-search_content div .search_title {
    font-weight: 600;
    position: relative;
    font-size: 17px;
    @media screen and (max-width: 420px) {
      font-size: 14px;
    }

    @media screen and (max-width: 767px) and (min-width: 420px) {
      font-size: 15px;
    }
  }

  .dropdown-search_content div .search_creator {
    display: block;
    font-size: 13px;
    position: relative;
    left: 40px;
    margin-top: 0px;
    @media screen and (max-width: 420px) {
      font-size: 12px;
    }
    @media screen and (max-width: 767px) and (min-width: 420px) {
      font-size: 14px;
    }
  }
  .dropdown-search_content div img {
    border-radius: 50%;
    margin-right: 10px;
    position: relative;
    top: 20px;
  }

  .dropdown-search_content div:last-child {
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  .dropdown-search_content div:hover {
    background-color: #58257b;
    color: white;
  }
`;

export const LogoStyled = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
`;
