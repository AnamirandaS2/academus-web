export type User = {
  uuid: string;
  name: string;
  email: string;
  avatarUrl?: string;
  role?: string;
  totalPageReads?: number;
};
