import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../../shared/service/screen.service';
import { Screen } from '../../models/screen';

@Component({
  selector: 'auth-screen-entry',
  templateUrl: './screen-entry.component.html',
  styleUrls: ['./screen-entry.component.css']
})
export class ScreenEntryComponent implements OnInit {

  screens: Screen[] = [];
  rootModules: Screen[] = [];
  modules: Screen[] = [];
  constructor(private screenService: ScreenService) { }

  ngOnInit() {
    this.screenService.loadAllModules().subscribe(response => {
      this.modules = response;
      this.rootModules = this.modules.filter(mod => mod.isRootModule)
    })

    this.screenService.loadAllScreens().subscribe(response => {
      this.screens = response;
    })
  }

  handleAddClick() {
    this.screens.push(
      {
        uid: undefined,
        isModule: false,
        isRootModule: false,
        name: null,
        parentModuleId: null,
        parentModuleName: null,
        screens: [],
        routerPath: null
      }
    )
  }

  handleSaveClick() {
    // this.screens.forEach(screen => {
    //   screen.module = this.modules[this.modules.findIndex(mod => mod.uid === screen.parentModuleId)]
    // })
    console.log(this.screens);
    this.screenService.saveAllScreens(this.screens).subscribe(response => {
      this.screens = response;
    })
  }

}
