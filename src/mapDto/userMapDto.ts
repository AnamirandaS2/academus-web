import { UserDTO } from "../dtos/user.dto";
import { User } from "../entities/User.entity";

export const userMapDto = (data: UserDTO): User => {
  return {
    email: data.email,
    name: data.name,
    uuid: data.uuid,
    avatarUrl: data.avatar_url,
    role: data.role,
    totalPageReads: data.total_page_reads,
  };
};
