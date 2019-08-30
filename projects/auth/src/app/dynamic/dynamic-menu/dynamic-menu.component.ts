import { Component, OnInit } from '@angular/core';
import { Screen } from '../.././models/screen';
import { DynamicService } from '../../shared/dynamic/dynamic.service';
import { VERSION } from '@angular/material';
import { Router } from '@angular/router';
@Component({
  selector: 'auth-dynamic-menu',
  templateUrl: './dynamic-menu.component.html',
  styleUrls: ['./dynamic-menu.component.css']
})
export class DynamicMenuComponent implements OnInit {
  screens: Screen[] = [];
  tabs: { name, routerLink }[] = [];
  constructor(
    private dynamicService: DynamicService,
    private router: Router) { }
  //
  ngOnInit() {
    this.screens = this.dynamicService.getScreens();
    console.log('Retrive Screen List i Dynamic Comp: ', this.screens);
  }

  handleRouterClick(screen: Screen) {
    console.log('Router link is clicked --> ', screen);

    if (this.tabs.findIndex(s => screen.name === s.name) < 0) {
      this.tabs.push(
        {
          name: screen.name,
          routerLink: screen.routerPath
        }
      );
    }
    this.router.navigate([screen.routerPath]);
  }

}
