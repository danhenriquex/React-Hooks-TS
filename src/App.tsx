import React from "react";
import { BookList, NavBar, ToggleTheme } from "./components";
import {
  AuthContextProvider,
  BookContextProvider,
  ThemeContextProvider,
} from "./contexts";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <NavBar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ToggleTheme />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
