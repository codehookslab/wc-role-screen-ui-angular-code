import { Role } from './role';
import { WorkCenter } from './workcenter';
import { WorkCenterRoleScreens } from './wcRoleScreen';

export interface WorkCenterRole {
  id?: WorkCenterRoleCompositeKey;
  screens?: WorkCenterRoleScreens[];
  isSelected?: boolean;
}


export interface WorkCenterRoleCompositeKey {
  roleId?: Role;
  wcId?: WorkCenter;
}
