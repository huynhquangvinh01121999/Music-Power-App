/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState } from "react";
import MusicPlayerStyled from "./customStyled/Player/MusicPlayerStyled";
import { AppContext } from "../context/AppProvider";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import RepeatIcon from "@material-ui/icons/Repeat";
import styled from "styled-components";

const SkipPreviousIconStyled = styled(SkipPreviousIcon)`
  cursor: pointer;
  margin-left: 10px;
  margin-bottom: 5px;
  border: 1px solid silver;
  border-radius: 50%;
  @media screen and (max-width: 420px) {
    position: relative;
    left: 40px;
    top: 50px;
  }
  @media screen and (max-width: 767px) {
    position: relative;
    left: 120px;
    top: 120px;
  }
`;

const SkipNextIconStyled = styled(SkipNextIcon)`
  cursor: pointer;
  margin-left: -220px;
  margin-bottom: 5px;
  border: 1px solid silver;
  border-radius: 50%;
  @media screen and (max-width: 420px) {
    position: relative;
    top: 120px;
    left: 340px;
  }

  @media screen and (max-width: 767px) and (min-width: 420px) {
    position: relative;
    top: 120px;
    left: 365px;
  }
`;

const RepeatIconStyled = styled(RepeatIcon)`
  cursor: pointer;
  margin-left: 30px;
  margin-bottom: 8px;
  color: silver;
  border: 1px solid white;
  border-radius: 50%;
  padding: 5px;
  .action_repeat {
    color: #3f51b5;
  }
  @media screen and (max-width: 420px) {
    position: relative;
    left: 40px;
    top: 50px;
  }
  @media screen and (max-width: 767px) {
    position: relative;
    left: 120px;
    top: 120px;
  }
`;

export default function MusicPlayer() {
  const {
    listMusic,
    musicChoicePlay,
    setMusicChoicePlay,
    isShowing,
    isRepeat,
    setIsRepeat,
  } = useContext(AppContext);

  const handlePlayNext = () => {
    if (musicChoicePlay.position == listMusic.length - 1) {
      setMusicChoicePlay({
        position: 0,
        music: listMusic[0],
      });
    } else {
      setMusicChoicePlay({
        position: musicChoicePlay.position + 1,
        music: listMusic[musicChoicePlay.position + 1],
      });
    }
  };

  const handlePlayPrevious = () => {
    if (musicChoicePlay.position > 0) {
      setMusicChoicePlay({
        position: musicChoicePlay.position - 1,
        music: listMusic[musicChoicePlay.position - 1],
      });
    } else {
      setMusicChoicePlay({
        position: listMusic.length - 1,
        music: listMusic[listMusic.length - 1],
      });
    }
  };

  const handleRepeat = () => {
    const repeat = document.getElementById("repeat");
    !isRepeat
      ? (repeat.style.color = "#3f51b5")
      : (repeat.style.color = "silver");

    setIsRepeat(!isRepeat);
  };

  return (
    <MusicPlayerStyled hidden={isShowing}>
      <img
        className="img_player"
        src={musicChoicePlay.music.avatar}
        alt="error"
        width={60}
        height={60}
      />
      <RepeatIconStyled
        id="repeat"
        style={{ fontSize: 30 }}
        onClick={handleRepeat}
      />
      <SkipPreviousIconStyled
        color="primary"
        style={{ fontSize: 40 }}
        onClick={handlePlayPrevious}
      />
      <div className="info_player">
        <h3>
          {musicChoicePlay.music.title} -{" "}
          <span>{musicChoicePlay.music.creator}</span>
        </h3>
        <audio
          className="audio_player"
          src={musicChoicePlay.music.music}
          controls
          loop={isRepeat}
          autoPlay
          title={
            musicChoicePlay.music.title + " - " + musicChoicePlay.music.creator
          }
          onEnded={handlePlayNext} // khi hết bài sẽ tự chuyển sang bài kế tiếp
          onError={handlePlayNext} // khi gặp bài bị lỗi sẽ tự chuyển sang bài kế tiếp
        />
      </div>
      <SkipNextIconStyled
        color="primary"
        style={{ fontSize: 40 }}
        onClick={handlePlayNext}
      />
    </MusicPlayerStyled>
  );
}
