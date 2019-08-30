import { Role } from './role';
import { Screen } from './screen';
import { WorkCenterRoleScreens } from './wcRoleScreen';
import { WorkCenterRole } from './wcRole';

export interface User {
  uid?: number;
  username?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  validFrom?: Date;
  validUpto?: Date;
  role?: Role;
  screenOrModules?: Screen[];
  wcRolesMap?: WorkCenterRole[];
}
