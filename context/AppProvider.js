import React, { useState } from "react";

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [musicChoicePlay, setMusicChoicePlay] = useState([]);

  const [isShowing, setIsShowing] = useState(true);

  const [listMusic, setListMusic] = useState([]);

  const [categoryTop100, setCatetogoryTop100] = useState("Nhạc trẻ");

  return (
    <AppContext.Provider
      value={{
        musicChoicePlay,
        isShowing,
        listMusic,
        categoryTop100,
        setMusicChoicePlay,
        setIsShowing,
        setListMusic,
        setCatetogoryTop100,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
