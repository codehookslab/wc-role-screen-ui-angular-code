import { Component, OnInit } from '@angular/core';
import { Screen } from '../../models/screen';
import { WorkCenterRole } from '../../models/wcRole';
import { RoleService } from '../../shared/service/role.service';
import { forkJoin } from 'rxjs';
import { WorkCenterRoleScreens } from '../../models/wcRoleScreen';
import { ResolvedStaticSymbol } from '@angular/compiler';
import { ScreenService } from '../../shared/service/screen.service';

@Component({
  selector: 'auth-work-center-role-screen',
  templateUrl: './work-center-role-screen.component.html',
  styleUrls: ['./work-center-role-screen.component.css']
})
export class WorkCenterRoleScreenComponent implements OnInit {

  screenMasters: Screen[] = [];
  workCenterRoleMasters: WorkCenterRole[] = [];
  workCenterRoleScreenMasters: WorkCenterRoleScreens[] = [];

  _selectedWorkCenterRoleScreen: WorkCenterRoleScreens;
  _selectedWorkCenterRole: WorkCenterRole;
  _workCenterRoles: WorkCenterRole[] = [];
  constructor(
    private roleService: RoleService
  ) { }

  ngOnInit() {
    this._workCenterRoles = [];
    forkJoin(
      this.roleService.loadAllScreensOnly(),
      this.roleService.loadAllWcRoleScreens(),
      this.roleService.loadAllWorkCenterRoleScreensOnly()
    ).subscribe(response => {
      this.screenMasters = response[0];
      this.workCenterRoleMasters = response[1];
      this.workCenterRoleScreenMasters = response[2];

      console.log(this.screenMasters);
      console.log(this.workCenterRoleMasters);
      console.log(this.workCenterRoleScreenMasters);

      if (this.workCenterRoleScreenMasters) {
        const filteredArray = this.workCenterRoleMasters.filter(v => (v.screens && v.screens.length > 0))

        filteredArray.forEach(fWcr => {
          const selectedList = this.workCenterRoleScreenMasters.filter(wcrs => {
            return (fWcr.id.roleId.uid === wcrs.transId.wcRoleId.id.roleId.uid
              && fWcr.id.wcId.workcenterid === wcrs.transId.wcRoleId.id.wcId.workcenterid)
          });
          const screensToAdd: WorkCenterRoleScreens[] = [];
          console.log(selectedList)
          this.screenMasters.forEach( scrMtr => {
            const index = selectedList.findIndex(sl => sl.transId.screenId.uid === scrMtr.uid);
            if(index < 0) {
              screensToAdd.push({
                canRemove: false,
                canInsert: false,
                canUpdate: false,
                canView: false,
                isSelected: false,
                id: {
                  wcRoleId: this.workCenterRoleMasters[0],
                  screenId: scrMtr
                }
              })
            } else {
              screensToAdd.push({
                canRemove: selectedList[index].canRemove,
                canInsert: selectedList[index].canInsert,
                canUpdate: selectedList[index].canUpdate,
                canView: selectedList[index].canView,
                isSelected: true,
                id: {
                  wcRoleId: selectedList[index].transId.wcRoleId,
                  screenId: scrMtr
                }
              })
            }
          })
          fWcr.screens = screensToAdd;
          console.log(fWcr);
          this._workCenterRoles.push(fWcr);
        })
      }
      this.onSelectWorkCenterRole(this._workCenterRoles[0])
    });
  }

  handleAddClick() {
    const screensToAdd: WorkCenterRoleScreens[] = [];
    this.screenMasters.forEach(v => {
      screensToAdd.push({
        canRemove: false,
        canInsert: false,
        canUpdate: false,
        canView: false,
        isSelected: false,
        id: {
          wcRoleId: this.workCenterRoleMasters[0],
          screenId: v
        }
      })
    });
    this._selectedWorkCenterRole = {
      ...this.workCenterRoleMasters[0],
      screens: screensToAdd
    };

    this._workCenterRoles.push(this._selectedWorkCenterRole)
    console.log(this._workCenterRoles);
  }

  onSelectWorkCenterRole(selWcRole: WorkCenterRole) {
    this._selectedWorkCenterRole = selWcRole;
    this._selectedWorkCenterRole.screens.forEach(v => {
      v.id.wcRoleId = this._selectedWorkCenterRole;
    });
  }

  handleSaveClick() {
    console.log(this._selectedWorkCenterRole);
    const screensToSave: WorkCenterRoleScreens[] = [];



    this._workCenterRoles.forEach(t => {
      t.screens.filter(v => v.isSelected).forEach(value => {
        let saveValue = value;
        saveValue.id.wcRoleId = value.id.wcRoleId;
        saveValue.id.wcRoleId.screens = undefined;
        console.log('--------------------')
        console.log(saveValue)
        screensToSave.push(saveValue);
      })
    });

    console.log(screensToSave)

    this.roleService.saveAllWcRoleScreensArrays(screensToSave).subscribe(res => {
      console.log(res);
    })
  }

}
