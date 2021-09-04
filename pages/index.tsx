/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import styled from "styled-components";
import callApi from "axios";
import banner1 from "../public/panners/bao-anh-3-9.jpg";
import banner2 from "../public/panners/day-lui-covid.jpg";
import banner3 from "../public/panners/roi-moi-chuyen-se-qua.jpg";
import { AppContext } from "../context/AppProvider";
import React, { useContext } from "react";

const ImageStyled = styled.div`
  width: 320px;
  height: 160px;
  margin: 30px 8px 30px 35px;
  background-color: white;
  display: inline-block;
  border-radius: 15px;
  @media screen and (max-width: 420px) {
    margin: 30px 5px 25px 26px;
    width: 320px;
    height: 150px;
  }
`;

const TitleMainStyled = styled.div`
  color: white;
  margin-left: 20px;
  font-size: 28px;
`;

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

export default function Home({ musics }) {
  const { setMusicChoicePlay, setIsShowing } = useContext(AppContext);

  const handlePlayMusic = (music) => {
    setMusicChoicePlay(music);
    setIsShowing(false);
  };

  return (
    <>
      <div>
        <ImageStyled>
          <Image
            className="banner"
            src={banner1}
            alt="error"
            width={350}
            height={190}
          />
        </ImageStyled>
        <ImageStyled>
          <Image
            className="banner"
            src={banner2}
            alt="error"
            width={350}
            height={190}
          />
        </ImageStyled>
        <ImageStyled>
          <Image
            className="banner"
            src={banner3}
            alt="error"
            width={350}
            height={190}
          />
        </ImageStyled>
        <style jsx global>{`
          .banner {
            border-radius: 15px;
          }
        `}</style>
        ;
      </div>
      <div>
        <TitleMainStyled>
          <h3>Mới phát hành</h3>
        </TitleMainStyled>
        <div>
          {musics.map((music, index) => (
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
  return { musics: json.songs.top100_VN[0].songs };
};
