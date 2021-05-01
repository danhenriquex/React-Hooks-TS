import React, { createContext, useState } from "react";

interface AuthContextProps {
  isAuthenticated?: boolean;
  toggleAuth?: () => any;
}

export const AuthContext = createContext<AuthContextProps>({});

export const AuthContextProvider: React.FC = (props) => {
  const [state, setState] = useState<AuthContextProps>({});

  function toggleAuth() {
    setState({ isAuthenticated: !state.isAuthenticated });
  }

  return (
    <AuthContext.Provider value={{ ...state, toggleAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
};
