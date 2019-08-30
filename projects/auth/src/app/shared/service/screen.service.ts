import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Screen } from '../../models/screen';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {

  constructor(private http: HttpClient) { }

  loadAllModules() {
    return this.http.get<Screen[]>('/auth/screens/modules-only');
  }

  loadAllScreens() {
    return this.http.get<Screen[]>('/auth/screens/screen-only')
  }

  saveAllModules(modules: Screen[]) {
    return this.http.post<Screen[]>('/auth/screens/save-modules', modules);
  }

  saveAllScreens(screens: Screen[]) {
    return this.http.post<Screen[]>('/auth/screens/save-screens', screens)
  }
}
