import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Role } from '../../models/role';
import { Screen } from '../../models/screen';
import { WorkCenter } from '../../models/workcenter';
import { WorkCenterRoleScreens } from '../../models/wcRoleScreen';
import { User } from '../../models/user';
import { WorkCenterRole } from '../../models/wcRole';


@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }

  loadAllScreensOnly() {
    return this.http.get<Screen[]>('/auth/screens/screen-only');
  }

  loadAllWorkCenterRoleScreensOnly() {
    return this.http.get<WorkCenterRoleScreens[]>('/auth/wc-role-screens');
  }

  loadAllRoles() {
    return this.http.get<Role[]>('/auth/roles');
  }

  loadAllWcs() {
    return this.http.get<WorkCenter[]>('/auth/wc');
  }

  // wc-role-screens
  loadAllWcRoleScreens() {
    return this.http.get<WorkCenterRole[]>('/auth/wc/wc-role-screens');
  }

  saveAllWcRoleScreens(workCenterRoles: WorkCenterRole[]) {
    return this.http.post<WorkCenterRole[]>('/auth/wc/wc-role-screens', workCenterRoles);
  }

  saveAllRoles(roles: Role[]) {
    return this.http.post<Role[]>('/auth/roles', roles);
  }

  saveuser(user: User) {
    return this.http.post<User[]>('/auth/users', user);
  }

  saveAllWcRoleScreensArrays(valuesToSave: WorkCenterRoleScreens[]) {
    return this.http.post<WorkCenterRoleScreens[]>('/auth/wc-role-screens', valuesToSave);
  }
}
