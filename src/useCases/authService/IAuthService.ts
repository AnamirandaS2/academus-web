import { User } from "../../entities/User.entity";

export type LoginData = {
  email: string;
  password: string;
};

export interface IAuthService {
  login: (data: LoginData) => Promise<{ token: string }>;
  register: (data: RegisterData) => Promise<User>;
}

export type RegisterData = {
  name: string;
  email: string;
  cpf: string;
  password: string;
};
