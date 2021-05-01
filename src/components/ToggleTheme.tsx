import React, { useContext } from "react";
import { ThemeContext } from "../contexts";

const ToggleTheme = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <button onClick={toggleTheme}>Toggle the theme</button>
    </div>
  );
};

export default ToggleTheme;
