import { UserDTO } from "../../dtos/user.dto";
import { User } from "../../entities/User.entity";
import { userMapDto } from "../../mapDto/userMapDto";
import { api } from "../../services/api";
import { IAuthService, LoginData } from "./IAuthService";

export class AuthService implements IAuthService {
  async login(data: LoginData): Promise<{ token: string }> {
    return await api
      .post<{ token: string }>("/auth/login", data)
      .then(({ data }) => data);
  }

  async me(): Promise<User> {
    return await api
      .get<UserDTO>("/auth/me")
      .then(({ data }) => userMapDto(data));
  }
}
