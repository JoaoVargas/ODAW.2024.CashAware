import { createContext, useContext, useMemo, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import api from "./axiosInstance";

interface UserType {
  username: string;
  password: string;
}

interface AuthContextType {
  user: UserType | null;
  login: (data: UserType) => Promise<boolean | void>;
  register: (data: UserType) => Promise<boolean | void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useLocalStorage<UserType | null>("user", null);
  const navigate = useNavigate();

  const login = async (data: UserType) => {
    try {
      const response = await api.post("/login", data);

      if (response.data.error) {
        console.log(response.data.error); 
        return false      
      }

      if (response.data) {
        const { user } = response.data;
        setUser(user);
        navigate("/dashboard");
      }


    } catch (error: any) {
      console.log(error.status, error.message, error.response)
    }
  };
  
  const register = async (data: UserType) => {
    try {
      const response = await api.post("/register", data);

      if (response.data.error) {
        console.log(response.data.error); 
        return false      
      }

      if (response.data) {
        const { user } = response.data;
        setUser(user);
        navigate("/dashboard");
      }


    } catch (error: any) {
      console.log(error.status, error.message, error.response)
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
