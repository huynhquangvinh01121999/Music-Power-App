/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import ImageStyled from "../components/customStyled/Home/ImageStyled";
import TitleMainStyled from "../components/customStyled/Home/TitleMainStyled";
import ItemStyled from "../components/customStyled/Home/ItemStyled";
import callApi from "axios";
import top_100_nhactre from "../public/top100/top_100_nhactre.jpg";
import top_100_trutinh from "../public/top100/top_100_trutinh.jpg";
import top_100_aumy from "../public/top100/top_100_aumy.jpg";
import top_100_han from "../public/top100/top_100_han.jpg";
import top_100_rapviet from "../public/top100/top_100_rapviet.jpg";
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

  const handlePlayMusic = (music) => {
    setMusicChoicePlay(music);
    setIsShowing(false);
  };

  // nạp lần đầu rồi ngưng luôn
  useEffect(() => {
    setListMusic(musics.top100_VN[0].songs);
  }, []);

  const handleGetMusicByCategory = (category: string) => {
    switch (category) {
      case "nhactre":
        setCatetogoryTop100("Nhạc trẻ");
        setListMusic(musics.top100_VN[0].songs);
        break;
      case "trutinh":
        setCatetogoryTop100("Trữ tình");
        setListMusic(musics.top100_VN[1].songs);
        break;
      case "rapviet":
        setCatetogoryTop100("Rap Việt");
        setListMusic(musics.top100_VN[4].songs);
        break;
      case "han":
        setCatetogoryTop100("Hàn Quốc");
        setListMusic(musics.top100_CA[0].songs);
        break;
      case "aumy":
        setCatetogoryTop100("Âu Mỹ");
        setListMusic(musics.top100_AM[0].songs);
        break;
    }
  };

  return (
    <>
      <div className="banner_top100"></div>
      <div className="category_top100">
        <ImageStyled>
          <Image
            className="banner"
            src={top_100_nhactre}
            alt="error"
            width={180}
            height={180}
            onClick={() => handleGetMusicByCategory("nhactre")}
          />
        </ImageStyled>
        <ImageStyled>
          <Image
            className="banner"
            src={top_100_trutinh}
            alt="error"
            width={180}
            height={180}
            onClick={() => handleGetMusicByCategory("trutinh")}
          />
        </ImageStyled>
        <ImageStyled>
          <Image
            className="banner"
            src={top_100_aumy}
            alt="error"
            width={180}
            height={180}
            onClick={() => handleGetMusicByCategory("aumy")}
          />
        </ImageStyled>
        <ImageStyled>
          <Image
            className="banner"
            src={top_100_han}
            alt="error"
            width={180}
            height={180}
            onClick={() => handleGetMusicByCategory("han")}
          />
        </ImageStyled>
        <ImageStyled>
          <Image
            className="banner"
            src={top_100_rapviet}
            alt="error"
            width={180}
            height={180}
            onClick={() => handleGetMusicByCategory("rapviet")}
          />
        </ImageStyled>
        <style jsx global>{`
          .banner {
            border-radius: 5px;
          }
        `}</style>
        ;
      </div>
      <div>
        <TitleMainStyled>
          <h4>Top 100 - {categoryTop100}</h4>
        </TitleMainStyled>
        <div>
          {listMusic.map((music, index) => (
            <ItemStyled key={index} onClick={() => handlePlayMusic(music)}>
              <span className="numberItem">{index + 1}</span>
              <img
                className="imageItem"
                src={music.avatar}
                width={45}
                height={45}
                alt="null"
              />
              <div className="description">
                <span className="music_song">{music.title}</span>
                <span className="creator">{music.creator}</span>
              </div>
            </ItemStyled>
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
