import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { WorkCenterRoleComponent } from './pages/role/role.component';
import { ModuleEntryComponent } from './pages/module-entry/module-entry.component';
import { ScreenEntryComponent } from './pages/screen-entry/screen-entry.component';
import { UserComponent } from './pages/user/user.component';
import { WorkCenterRoleScreenComponent } from './pages/work-center-role-screen/work-center-role-screen.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'app',
    component: MainComponent,
    children: [
      {
        path: 'screen-entry',
        component: ScreenEntryComponent
      },
      {
        path: 'wc-role',
        component: WorkCenterRoleComponent
      },
      {
        path: 'module-entry',
        component: ModuleEntryComponent
      },
      {
        path: 'user-entry',
        component: UserComponent
      },
      {
        path: 'wc-role-screen',
        component: WorkCenterRoleScreenComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
