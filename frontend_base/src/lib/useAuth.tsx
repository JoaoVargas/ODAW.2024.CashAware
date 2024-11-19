import { createContext, useContext, useMemo, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

// Define the shape of the Auth context value
interface AuthContextType {
  user: UserType | null;
  login: (data: UserType) => Promise<void>;
  logout: () => void;
}

// Define the shape of the user object (customize based on your needs)
interface UserType {
  id: number;
  username: string;
  email: string;
}

// Create the AuthContext with a default value of null
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Define props for the AuthProvider component
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useLocalStorage<UserType | null>("user", null);
  const navigate = useNavigate();

  // Function to authenticate the user
  const login = async (data: UserType) => {
    setUser(data);
    navigate("/profile");
  };

  // Function to sign out the user
  const logout = () => {
    setUser(null);
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
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
