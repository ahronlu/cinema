import React from "react";
import { useSelector } from "react-redux";
import FilmList from "./components/FilmList";
import Header from "./components/Header";

const App = () => {
  const { darkMode } = useSelector((state) => state.theme);

  return (
    <div className={darkMode ? "inverse" : ""}>
      <Header />
      <FilmList />
    </div>
  );
};

export default App;
