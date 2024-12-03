export interface UserType {
  id: number;
  username: string;
  password: string;
  email: string;
  nome: string;
}

export interface UserLogin {
  username: string;
  password: string;
}

export interface UserRegister {
  username: string;
  password: string;
  email: string;
  nome: string;
}