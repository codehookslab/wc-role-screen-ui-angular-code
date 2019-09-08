import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../shared/service/role.service';
import { forkJoin } from 'rxjs';
import { Role } from '../../models/role';
import { Screen } from '../../models/screen';
import { WorkCenter } from '../../models/workcenter';
import { WorkCenterRoleScreens } from '../../models/wcRoleScreen';
import { WorkCenterRole } from '../../models/wcRole';

// export interface Screen {
//   'parentModuleId': number;
//   'parentModuleName': string;
//   'uid': number;
//   'name': string;
//   'routerPath': string;
//   'isModule': boolean;
//   'isRootModule': boolean;
//   'screens'?: Screen[];
//   'isSelected'?: boolean;
//   'module'?: Screen;
// }

// export interface Role {
//   'uid': number;
//   'role': string;
//   'screens': Screen[];
// }

@Component({
  selector: 'auth-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class WorkCenterRoleComponent implements OnInit {

  roles: Role[];
  workCenters: WorkCenter[];
  workCenterRoles: WorkCenterRole[];
  selectedWorkCenterRole: WorkCenterRole;

  // screens: WorkCenterRoleScreens[];
  constructor(
    private roleService: RoleService
  ) { }

  ngOnInit() {
    forkJoin(
      // this.roleService.loadAllWorkCenterRoleScreensOnly(), // Screens
      this.roleService.loadAllRoles(), // Roles
      this.roleService.loadAllWcs(),
      this.roleService.loadAllWcRoleScreens()
    ).subscribe(response => {
      // this.screens = response[0];
      this.roles = response[0];
      this.workCenters = response[1];
      this.workCenterRoles = response[2];

      console.log(this.workCenters);
      console.log(this.roles);

      this.selectedWorkCenterRole = this.workCenterRoles[0];
      // console.log('----- Roles')
      // console.log(this.roles)
      // this.updateScreensList();
    })
  }

  handleOnRoleClick(role: WorkCenterRole) {
    // this.setScreensToRole()
    // this.screens.forEach(screen => screen.isSelected = false)
    this.selectedWorkCenterRole = role;
    // this.updateScreensList();
  }

  // updateScreensList() {
  //   this.selectedWorkCenterRole.screens.forEach(roleScreen => {
  //     // const index = this.screens.findIndex(obj => obj.screenId.uid === roleScreen.screenId.uid)
  //     // this.screens[index].isSelected = true;
  //   })
  // }

  handleSaveClick() {
    console.log('Saving role')
    console.log(this.workCenterRoles)
    this.roleService.saveAllWcRoleScreens(this.workCenterRoles).subscribe(response => {
      console.log(response)
      this.workCenterRoles = response;
      this.selectedWorkCenterRole = this.workCenterRoles[0];
      // this.updateScreensList();
    })
  }

  handleAddClick() {
    // this.setScreensToRole()
    // this.screens.forEach(screen => screen.isSelected = false)
    this.workCenterRoles.push({
      id: {
        roleId: this.roles[0],
        wcId: this.workCenters[0]
      },
      screens: []
    });
    this.selectedWorkCenterRole = this.workCenterRoles[this.roles.length];
  }

  // setScreensToRole() {
  //   if (this.selectedWorkCenterRole !== undefined) {
  //     this.selectedWorkCenterRole.screens = this.screens.filter(screen => screen.isSelected)
  //   }
  // }
}
