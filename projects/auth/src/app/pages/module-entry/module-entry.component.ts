import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../../shared/service/screen.service';
import { Screen } from '../../models/screen';

@Component({
  selector: 'auth-module-entry',
  templateUrl: './module-entry.component.html',
  styleUrls: ['./module-entry.component.css']
})
export class ModuleEntryComponent implements OnInit {

  modules: Screen[] = [];
  rootModules: Screen[] = [];

  constructor(private screenService: ScreenService) { }

  ngOnInit() {
    this.screenService.loadAllModules().subscribe(response => {
      console.log(response);
      this.modules = response;
      this.rootModules = this.modules.filter(mod => mod.isRootModule)
    })
  }

  handleAddClick() {
    console.log('adding module');
    this.modules.unshift(
      {
        isModule: true,
        isRootModule: false,
        name: '',
        routerPath: null,
        parentModuleId: null,
        parentModuleName: null,
        uid: null
      }
    );
  }

  handleSaveClick() {
    console.log('Saving')
    console.log(this.modules)

    this.screenService.saveAllModules(this.modules).subscribe(response => {
      console.log('After saving records')
      this.modules = response;
      this.rootModules = this.modules.filter(mod => mod.isRootModule)
      console.log(this.modules)
    })
  }

  loadModules(module: Screen) {
    return this.modules.filter(mod => mod.name !== module.name)
  }
}
