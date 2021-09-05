/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import MusicPlayerStyled from "./customStyled/Player/MusicPlayerStyled";
import { AppContext } from "../context/AppProvider";

export default function MusicPlayer() {
  const { musicChoicePlay, isShowing } = useContext(AppContext);

  return (
    <MusicPlayerStyled hidden={isShowing}>
      <img
        className="img_player"
        src={musicChoicePlay.avatar}
        alt="error"
        width={60}
        height={60}
      />
      <div className="info_player">
        <h3>
          {musicChoicePlay.title} - <span>{musicChoicePlay.creator}</span>
        </h3>
        <audio
          className="audio_player"
          src={musicChoicePlay.music}
          controls={"controls"}
          loop={true}
          autoPlay
        />
      </div>
    </MusicPlayerStyled>
  );
}
