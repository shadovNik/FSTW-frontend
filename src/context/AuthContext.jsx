import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider ({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);

  const login = (token) => {
    localStorage.setItem('accessToken', token);
    setIsAuth(true);
  }

  const logout = () => {
    localStorage.removeItem('accessToken');
    setIsAuth(false);
    logoutFetch();
  }

  async function logoutFetch() {
    const response = await fetch('http://localhost:80/api/logout', {
      method: "POST",
    });

    if (!response.ok) {
      alert('Вы не можете выйти, не авторизовавшись');
    }
  }

  return (
    <AuthContext.Provider value={{ isAuth, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
