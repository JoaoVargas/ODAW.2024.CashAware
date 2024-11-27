import { useState, FormEvent } from "react";

import { useAuth } from "@/lib/useAuth";
import { Button } from "@/components/ui/button";

interface RegisterData {
  username: string;
}

export default function RegisterPage() {
  const [username, setUsername] = useState<string>("asdasd");
  const [password, setPassword] = useState<string>("Password@123");
  const { register } = useAuth();

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username && password) {
      
      await register({
        username, 
        password,
      });
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
        <Button type="submit">teste</Button>
      </form>
    </div>
  );
};
