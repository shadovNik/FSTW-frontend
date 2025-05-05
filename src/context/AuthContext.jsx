import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider ({ children }) {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      localStorage.setItem('accessToken', token);
      setIsAuth(true);
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('accessToken', token);
    setIsAuth(true);
  }

  const logout = () => {
    localStorage.removeItem('accessToken');
    setIsAuth(false);
  }

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
