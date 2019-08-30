import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { WorkCenterRoleScreens } from '../../models/wcRoleScreen';
import { RoleService } from '../../shared/service/role.service';
import { WorkCenterRole } from '../../models/wcRole';

@Component({
  selector: 'auth-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;
  workCenters: WorkCenterRole[];

  constructor(private roleService: RoleService) { }

  ngOnInit() {
    this.roleService.loadAllWcRoleScreens().subscribe(response => {
      this.workCenters = response;
    });

    this.user = {
      wcRolesMap: []
    };

  }

  handleSaveUser() {
    this.user.wcRolesMap = this.workCenters.filter(wc => wc.isSelected);
    console.log(this.user);
    this.roleService.saveuser(this.user).subscribe(response => {
      console.log(response);
    })
  }

}
