/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import TitleMainStyled from "../components/customStyled/Home/TitleMainStyled";
import ItemStyled from "../components/customStyled/Home/ItemStyled";
import callApi from "axios";
import top_100_nhactre from "../public/top100/top_100_nhactre.jpg";
import top_100_trutinh from "../public/top100/top_100_trutinh.jpg";
import top_100_aumy from "../public/top100/top_100_aumy.jpg";
import top_100_han from "../public/top100/top_100_han.jpg";
import top_100_rapviet from "../public/top100/top_100_rapviet.jpg";
import top_100_cachmang from "../public/top100/top_100_cachmang.jpg";
import { AppContext } from "../context/AppProvider";
import React, { useContext, useEffect } from "react";

export default function Home({ musics }) {
  const {
    setMusicChoicePlay,
    setIsShowing,
    listMusic,
    setListMusic,
    categoryTop100,
    setCatetogoryTop100,
  } = useContext(AppContext);

  const handlePlayMusic = (index, music) => {
    setMusicChoicePlay({
      position: index,
      music: music,
    });
    setIsShowing(false);
  };

  // nạp lần đầu rồi ngưng luôn
  useEffect(() => {
    setListMusic(musics.top100_VN[0].songs);
  }, []);

  const handleScrollBody = () => {
    window.scrollTo(0, 600);
  };

  const handleGetMusicByCategory = (category: string) => {
    switch (category) {
      case "nhactre":
        handleScrollBody();
        setCatetogoryTop100("Nhạc trẻ");
        setListMusic(musics.top100_VN[0].songs);
        break;
      case "trutinh":
        handleScrollBody();
        setCatetogoryTop100("Trữ tình");
        setListMusic(musics.top100_VN[1].songs);
        break;
      case "rapviet":
        handleScrollBody();
        setCatetogoryTop100("Rap Việt");
        setListMusic(musics.top100_VN[4].songs);
        break;
      case "han":
        handleScrollBody();
        setCatetogoryTop100("Hàn Quốc");
        setListMusic(musics.top100_CA[0].songs);
        break;
      case "aumy":
        handleScrollBody();
        setCatetogoryTop100("Âu Mỹ");
        setListMusic(musics.top100_AM[0].songs);
        break;
    }
  };

  return (
    <>
      <div className="col l-12 m-12 c-12 banner_top100"></div>
      <div className="row">
        <div className="col l-2 m-4 c-6 category_image">
          <Image
            className="image_top_100"
            src={top_100_nhactre}
            alt="error"
            width={190}
            height={200}
            onClick={() => handleGetMusicByCategory("nhactre")}
          />
        </div>
        <div className="col l-2 m-4 c-6 category_image">
          <Image
            className="image_top_100"
            src={top_100_trutinh}
            alt="error"
            width={190}
            height={200}
            onClick={() => handleGetMusicByCategory("trutinh")}
          />
        </div>
        <div className="col l-2 m-4 c-6 category_image">
          <Image
            className="image_top_100"
            src={top_100_aumy}
            alt="error"
            width={190}
            height={200}
            onClick={() => handleGetMusicByCategory("aumy")}
          />
        </div>
        <div className="col l-2 m-4 c-6 category_image">
          <Image
            className="image_top_100"
            src={top_100_han}
            alt="error"
            width={190}
            height={200}
            onClick={() => handleGetMusicByCategory("han")}
          />
        </div>
        <div className="col l-2 m-4 c-6 category_image">
          <Image
            className="image_top_100"
            src={top_100_rapviet}
            alt="error"
            width={190}
            height={200}
            onClick={() => handleGetMusicByCategory("rapviet")}
          />
        </div>
        <div className="col l-2 m-4 c-6 category_image">
          <Image
            className="image_top_100"
            src={top_100_cachmang}
            alt="error"
            width={190}
            height={200}
            onClick={() => handleGetMusicByCategory("han")}
          />
        </div>
      </div>
      <div className="row">
        <div className="col l-12 m-12 c-12">
          <TitleMainStyled>
            <h4>Top 100 - {categoryTop100}</h4>
          </TitleMainStyled>
        </div>
      </div>

      <div className="row">
        <div className="col l-12 m-12 c-12">
          {listMusic.map((music, index) => (
            <div
              className="row focus_play"
              key={index}
              onClick={() => handlePlayMusic(index, music)}
            >
              <div className="col l-1 m-2 c-3">
                <span className="numberItem">{index + 1}</span>
              </div>
              <div className="col l-1 m-2 c-2">
                <img
                  className="imageItem"
                  src={music.avatar}
                  width={45}
                  height={45}
                  alt="null"
                />
              </div>
              <div className="col l-10 m-8 c-7">
                <span className="music_song">{music.title}</span>
                <span className="creator">{music.creator}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

Home.getInitialProps = async () => {
  const res = await callApi(
    "https://api.apify.com/v2/key-value-stores/EJ3Ppyr2t73Ifit64/records/LATEST?fbclid=IwAR3NyxJgQvoxr9aPtaKtbhWzizvgGphX-5CaxRwOb9UGm77W9oRAgVJ7Df4"
  );
  const json = await res.data;
  return { musics: json.songs };
};

// Tre : songs.top100_VN[0].songs
// Tru tinh: songs.top100_VN[1].songs
// Rap : songs.top100_VN[4].songs
// Hàn : songs.top100_CA[0].songs
// My  : songs.top100_AM[0].songs
