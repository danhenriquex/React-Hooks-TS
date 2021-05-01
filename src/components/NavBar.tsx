import React, { useContext } from "react";
import { AuthContext, ThemeContext } from "../contexts";

const NavBar: React.FC = () => {
  const { dark, light, lightTheme } = useContext(ThemeContext);
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const theme = lightTheme ? dark : light;

  return (
    <div>
      <nav style={{ background: theme?.ui, color: theme?.syntax }}>
        <h1>Context App</h1>
        <div onClick={toggleAuth}>
          {isAuthenticated ? "Logged in" : "Logged out"}
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
