import React, { useState } from "react";

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [musicChoicePlay, setMusicChoicePlay] = useState({
    position: null,
    music: [],
  });

  const [isShowing, setIsShowing] = useState(true);

  const [listMusic, setListMusic] = useState([]);

  const [categoryTop100, setCatetogoryTop100] = useState("Nhạc trẻ");

  const [isRepeat, setIsRepeat] = useState(false);

  const [isShuffle, setIsShuffle] = useState(false);

  const [isHiddenSearch, setIsHiddenSearch] = useState(true);

  return (
    <AppContext.Provider
      value={{
        musicChoicePlay,
        isShowing,
        listMusic,
        categoryTop100,
        isRepeat,
        isHiddenSearch,
        isShuffle,
        setMusicChoicePlay,
        setIsShowing,
        setListMusic,
        setCatetogoryTop100,
        setIsRepeat,
        setIsHiddenSearch,
        setIsShuffle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
