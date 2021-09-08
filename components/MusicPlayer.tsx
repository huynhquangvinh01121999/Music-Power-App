/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppProvider";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import RepeatIcon from "@material-ui/icons/Repeat";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import styled from "styled-components";

const MusicPlayerStyled = styled.div`
  user-select: none;
`;

const RepeatIconStyled = styled(RepeatIcon)`
  cursor: pointer;
  color: silver;
  border: 1px solid white;
  border-radius: 50%;
  padding: 5px;
  margin-bottom: 35px;
  @media (max-width: 320px) {
    margin-bottom: 48px;
  }
  @media (max-width: 576px) and (min-width: 321px) {
    margin-bottom: 48px;
  }
`;

const SkipPreviousIconStyled = styled(SkipPreviousIcon)`
  cursor: pointer;
  border: 1px solid silver;
  border-radius: 50%;
  margin-bottom: 30px;
  margin-left: 10px;
  @media (max-width: 320px) {
    position: relative;
    bottom: 15px;
    right: 6px;
  }
  @media (max-width: 576px) and (min-width: 321px) {
    position: relative;
    bottom: 15px;
    right: 6px;
  }
`;

const SkipNextIconStyled = styled(SkipNextIcon)`
  cursor: pointer;
  border: 1px solid silver;
  border-radius: 50%;
  margin-left: -15px;
  margin-top: 8px;
  @media (max-width: 320px) {
    position: relative;
    left: 2px;
  }
  @media (max-width: 576px) and (min-width: 321px) {
    position: relative;
    left: 2px;
  }
`;

const ShuffleIconStyled = styled(ShuffleIcon)`
  position: relative;
  bottom: 4px;
  left: 10px;
  cursor: pointer;
  color: silver;
  border: 1px solid white;
  border-radius: 50%;
  padding: 5px;
  @media (max-width: 320px) {
    position: relative;
    left: 5px;
  }
  @media (max-width: 576px) and (min-width: 321px) {
    position: relative;
    left: 7px;
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
    isShuffle,
    setIsShuffle,
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

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const handlePlayNextWhenEnd = () => {
    if (!isShuffle) {
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
    } else {
      const autoPosition = getRandomInt(99);
      setMusicChoicePlay({
        position: autoPosition,
        music: listMusic[autoPosition],
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

  const handleShuffle = () => {
    const shuffle = document.getElementById("shuffle");
    !isShuffle
      ? (shuffle.style.color = "#3f51b5")
      : (shuffle.style.color = "silver");

    setIsShuffle(!isShuffle);
  };

  return (
    <MusicPlayerStyled hidden={isShowing}>
      <div className="row music_player">
        <div className="col l-12 m-12 c-12">
          <div className="row">
            <div className="col l-12 m-12 c-12">
              <h3 className="music_player_title">
                {musicChoicePlay.music.title} -{" "}
                <span>{musicChoicePlay.music.creator}</span>
              </h3>
            </div>
          </div>
          <div className="row box_player">
            <div className="col l-3 m-3 c-3 box_left_player">
              <h3>
                <img
                  className="img_player"
                  src={musicChoicePlay.music.avatar}
                  alt="error"
                  width={60}
                  height={60}
                />
              </h3>
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
            </div>
            <div className="col l-5 m-5 c-5">
              <audio
                className="audio_player"
                src={musicChoicePlay.music.music}
                controls
                loop={isRepeat}
                autoPlay
                title={
                  musicChoicePlay.music.title +
                  " - " +
                  musicChoicePlay.music.creator
                }
                onEnded={handlePlayNextWhenEnd} // khi hết bài sẽ tự chuyển sang bài kế tiếp
                onError={handlePlayNextWhenEnd} // khi gặp bài bị lỗi sẽ tự chuyển sang bài kế tiếp
              />
            </div>
            <div className="col l-3 m-3 c-4">
              <SkipNextIconStyled
                color="primary"
                style={{ fontSize: 40 }}
                onClick={handlePlayNext}
              />
              <ShuffleIconStyled
                style={{ fontSize: 30 }}
                id="shuffle"
                onClick={handleShuffle}
              />
            </div>
          </div>
        </div>
      </div>
    </MusicPlayerStyled>
  );
}
