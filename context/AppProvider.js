import React, { useState } from "react";

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [musicChoicePlay, setMusicChoicePlay] = useState([]);
  const [isShowing, setIsShowing] = useState(true);

  return (
    <AppContext.Provider
      value={{
        musicChoicePlay,
        isShowing,
        setMusicChoicePlay,
        setIsShowing,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
