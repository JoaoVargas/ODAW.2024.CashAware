import { createContext, useContext, useMemo, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import api from "./axiosInstance";

import { UserLogin, UserRegister, UserType } from "./interfaces/AuthInterfaces";


interface AuthContextType {
  user: UserType | null;
  login: (data: UserLogin) => Promise<boolean>;
  register: (data: UserRegister) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  
  const [user, setUser] = useLocalStorage<UserType | null>("user", null);

  const login = async (data: UserLogin) => {
    try {
      const response = await api.post("/login", data);

      if (response.data.error) {
        console.log(response.data.error); 
        return false      
      }

      if (response.data.user) {
        const user = response.data.user as UserType;
        setUser(user);
        navigate("/dashboard");
        return true
      }

      return false
    } catch (error: any) {
      console.log(error.status, error.message, error.response)
      return false
    }
  };
  
  const register = async (data: UserRegister) => {
    try {
      const response = await api.post("/register", data);

      if (response.data.error) {
        console.log(response.data.error); 
        return false      
      }

      if (response.data.user) {
        const user = response.data.user as UserType;
        setUser(user);
        navigate("/dashboard");
        return true      
      }


      return false      
    } catch (error: any) {
      console.log(error.status, error.message, error.response)
      return false
    }
  };

  const logout = () => {
    setUser(null);
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      register,
      logout,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Hook to access the AuthContext
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
