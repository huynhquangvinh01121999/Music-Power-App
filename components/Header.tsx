/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppProvider";
import removeAccents from "../helper/removeAccents";
import {
  HeaderStyled,
  SearchStyled,
  LogoStyled,
} from "../components/customStyled/Header/HeaderStyled";

export default function Header() {
  const {
    musicChoicePlay,
    listMusic,
    setMusicChoicePlay,
    setIsShowing,
    isRepeat,
    setIsRepeat,
    isHiddenSearch,
    setIsHiddenSearch,
  } = useContext(AppContext);

  const [inputSearch, setInputSearch] = useState("");

  const [listSearch, setListSearch] = useState([]);

  const handleSearch = () => {
    setListSearch([]);
    const tempList = listMusic;
    setTimeout(() => {
      const filter = tempList.filter((music) =>
        removeAccents(music.title.toLowerCase()).includes(
          removeAccents(inputSearch.toLowerCase())
        )
      );

      setListSearch(filter);

      filter.length == listMusic.length
        ? setIsHiddenSearch(true)
        : setIsHiddenSearch(false);
    }, 500);
  };

  const handlePlayMusic = (index, music) => {
    setMusicChoicePlay({
      position: index,
      music: music,
    });
    setIsShowing(false);
  };

  return (
    <HeaderStyled>
      <SearchStyled>
        <input
          id="search_input"
          type="text"
          placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV..."
          onChange={(e) => {
            setInputSearch(e.target.value);
          }}
          onKeyUp={handleSearch}
          onMouseOut={() => setIsHiddenSearch(true)}
        />
        <div
          className="dropdown-search_content"
          hidden={isHiddenSearch}
          onMouseOver={() => setIsHiddenSearch(false)}
          onMouseOut={() => setIsHiddenSearch(true)}
        >
          {listSearch.map((music, index) => (
            <div key={index} onClick={() => handlePlayMusic(index, music)}>
              <img src={music.avatar} alt="error" width={30} height={30} />
              <a className="search_title">{music.title}</a>
              <a className="search_creator">{music.creator}</a>
            </div>
          ))}
        </div>
      </SearchStyled>
    </HeaderStyled>
  );
}
