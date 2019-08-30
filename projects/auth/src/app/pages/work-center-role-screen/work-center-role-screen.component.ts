import { Component, OnInit } from '@angular/core';
import { Screen } from '../../models/screen';
import { WorkCenterRole } from '../../models/wcRole';
import { RoleService } from '../../shared/service/role.service';
import { forkJoin } from 'rxjs';
import { WorkCenterRoleScreens } from '../../models/wcRoleScreen';

@Component({
  selector: 'auth-work-center-role-screen',
  templateUrl: './work-center-role-screen.component.html',
  styleUrls: ['./work-center-role-screen.component.css']
})
export class WorkCenterRoleScreenComponent implements OnInit {

  screens: Screen[];
  workCenterRoles: WorkCenterRole[];

  workCenterRoleScreens: WorkCenterRoleScreens[];

  selectedWorkCenterRole: WorkCenterRole;

  constructor(
    private roleService: RoleService
  ) { }

  ngOnInit() {
    this.workCenterRoleScreens = [];
    forkJoin(
      this.roleService.loadAllScreensOnly(),
      this.roleService.loadAllWcRoleScreens(),
      this.roleService.loadAllWorkCenterRoleScreensOnly()
    ).subscribe(response => {
      this.screens = response[0];
      this.workCenterRoles = response[1];
      this.workCenterRoleScreens = response[2];

      this.selectedWorkCenterRole = this.workCenterRoleScreens[0].wcRoleId;
    });
  }

  handleAddClick() {
    const t: WorkCenterRoleScreens[] = [];
    this.screens.forEach(s => {
      t.push({ screenId: s })
    })

    this.selectedWorkCenterRole = {
      screens: t
    }

    this.workCenterRoleScreens.push({
      wcRoleId: this.selectedWorkCenterRole
    })

  }

  handleOnClick(test: WorkCenterRoleScreens) {
    this.selectedWorkCenterRole = test.wcRoleId;
  }

  handleSaveClick() {

  }

}
