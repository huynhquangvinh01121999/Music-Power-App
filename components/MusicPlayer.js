import React from "react";

export default function MusicPlayer({ music }) {
  return (
    <>
      <audio src={music} autoPlay />
    </>
  );
}
