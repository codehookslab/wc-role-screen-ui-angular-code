import { Role } from './role';
import { WorkCenter } from './workcenter';
import { Screen } from './screen';
import { WorkCenterRole } from './wcRole';

export interface WorkCenterRoleScreens {
  id?: number;
  roleId?: Role;
  wcRoleId?: WorkCenterRole;
  screenId?: Screen;
  isSelected?: boolean;
  accessValue?: number;
  canInsert?: boolean;
  canUpdate?: boolean;
  canDelete?: boolean;
  canView?: boolean;
}
