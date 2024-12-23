export type LoginData = {
  email: string;
  password: string;
};

export interface IAuthService {
  login: (data: LoginData) => Promise<{ token: string }>;
}
