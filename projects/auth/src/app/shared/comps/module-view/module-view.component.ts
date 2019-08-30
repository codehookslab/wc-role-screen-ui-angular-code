import { Component, OnInit, Input } from '@angular/core';
import { Screen } from '../../../models/screen';
@Component({
  selector: 'auth-module-view',
  templateUrl: './module-view.component.html',
  styleUrls: ['./module-view.component.css']
})
export class ModuleViewComponent implements OnInit {

  @Input('modules') modules: Screen[] = [];
  constructor() { }

  ngOnInit() {
  }

  loadName(module: Screen) {
    return module.routerPath ? `${module.name} (Screen)` : `${module.name} (Module)`;
  }

}
