import { Role } from './role';
import { WorkCenter } from './workcenter';
import { Screen } from './screen';
import { WorkCenterRole } from './wcRole';

export interface WorkCenterRoleScreens {
  id?: WorkCenterRoleScreensCompositeKey;
  isSelected?: boolean;
  accessValue?: number;
  canInsert?: boolean;
  canUpdate?: boolean;
  canRemove?: boolean;
  canView?: boolean;
}

export interface WorkCenterRoleScreensCompositeKey {
  wcRoleId?: WorkCenterRole;
  screenId?: Screen;
}
