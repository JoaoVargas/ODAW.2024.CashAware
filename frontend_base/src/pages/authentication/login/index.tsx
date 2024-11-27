import { useState, FormEvent } from "react";

import { useAuth } from "@/lib/useAuth";
import { Button } from "@/components/ui/button";

interface LoginData {
  username: string;
}

export default function LoginPage() {
  const [username, setUsername] = useState<string>("asd");
  const [password, setPassword] = useState<string>("Password@123");
  const { login } = useAuth();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username && password) {
      
      await login({
        username, 
        password,
      });
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <Button type="submit">teste</Button>
      </form>
    </div>
  );
};
