import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AuthService } from './shared/service/auth.service';
import { WorkCenterRoleComponent } from './pages/role/role.component';
import { RoleService } from './shared/service/role.service';
import { ModuleEntryComponent } from './pages/module-entry/module-entry.component';
import { ScreenService } from './shared/service/screen.service';
import { ModuleViewComponent } from './shared/comps/module-view/module-view.component';
import { ScreenEntryComponent } from './pages/screen-entry/screen-entry.component';
import { DynamicMenuComponent } from './dynamic/dynamic-menu/dynamic-menu.component';
import { MenuItemComponent } from './dynamic/menu-item/menu-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialCommanModule } from './material-comman/material-comman.module';
import { UserComponent } from './pages/user/user.component';
import { WorkCenterRoleScreenComponent } from './pages/work-center-role-screen/work-center-role-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    WorkCenterRoleComponent,
    ModuleEntryComponent,
    ModuleViewComponent,
    ScreenEntryComponent,
    DynamicMenuComponent,
    MenuItemComponent,
    UserComponent,
    WorkCenterRoleScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialCommanModule
  ],
  providers: [AuthService, RoleService, ScreenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
