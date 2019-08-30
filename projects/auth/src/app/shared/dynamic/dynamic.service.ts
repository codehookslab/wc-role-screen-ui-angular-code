import { Injectable } from '@angular/core';
import { Screen } from '../.././models/screen';

@Injectable({
  providedIn: 'root'
})
export class DynamicService {
  screens: Screen[] = [];


  constructor() { }

  setScreen(screens) {
    this.screens = screens;
    console.log(' Screens Data set Sucessfully');
  }

  getScreens() {
    return this.screens;
  }
}
