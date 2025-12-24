import React, { createContext, useState, useEffect, ReactNode } from "react";
import Cookies from "js-cookie";

// Determine the type of context value
interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create a context with a default value of undefined
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

// Define props type for AuthProvider
interface AuthProviderProps {
  children: ReactNode;
}

// Provider component for authentication context
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!Cookies.get("token"),
  );

  useEffect(() => {
    const handleTokenChange = () => {
      setIsAuthenticated(!!Cookies.get("token"));
    };

    window.addEventListener("storage", handleTokenChange);
    return () => {
      window.removeEventListener("storage", handleTokenChange);
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
