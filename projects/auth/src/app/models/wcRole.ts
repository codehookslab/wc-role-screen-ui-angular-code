import { Role } from './role';
import { WorkCenter } from './workcenter';
import { WorkCenterRoleScreens } from './wcRoleScreen';

export interface WorkCenterRole {
  id?: number;
  roleId?: Role;
  wcId?: WorkCenter;
  screens?: WorkCenterRoleScreens[];
  isSelected?: boolean;
}
