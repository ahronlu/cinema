import React, { useState } from "react";
import FilmList from "./components/FilmList";
import Header from "./components/Header";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "inverse" : ""}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <FilmList />
    </div>
  );
};

export default App;
