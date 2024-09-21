import { Role } from "@app/modules/pages/authentication/role.enum";

export class User {
  id: number;
  coato: string;
  username: string;
  firstName: string;
  lastName: string;
  middleName: string;
  avatar: string;
  role: Role
}
