import React, { createContext, useState } from "react";

interface Theme {
  lightTheme?: boolean;
  light?: {
    syntax: string;
    ui: string;
    bg: string;
  };
  dark?: {
    syntax: string;
    ui: string;
    bg: string;
  };
  toggleTheme?: () => any;
}
export const ThemeContext = createContext<Theme>({});

export const ThemeContextProvider: React.FC = (props) => {
  const [theme, setTheme] = useState<Theme>({
    lightTheme: true,
    light: {
      syntax: "#555",
      ui: "#ddd",
      bg: "#eee",
    },
    dark: {
      syntax: "#ddd",
      ui: "#333",
      bg: "#555",
    },
  });

  function toggleTheme() {
    setTheme({ ...theme, lightTheme: !theme.lightTheme });
  }

  return (
    <ThemeContext.Provider value={{ ...theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
