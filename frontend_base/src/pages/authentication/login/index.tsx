import { useState, FormEvent } from "react";

import { useAuth } from "@/lib/useAuth";
import { Button } from "@/components/ui/button";

interface LoginData {
  username: string;
}

export default function LoginPage() {
  const [username, setUsername] = useState<string>("user");
  const [password, setPassword] = useState<string>("password");
  const { login } = useAuth();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === "user" && password === "password") {
      // Replace with actual authentication logic
      await login();
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div>
      <Button onClick={() => handleLogin}>
        teste
      </Button>
    </div>
  );
};
