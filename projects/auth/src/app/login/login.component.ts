import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/service/auth.service';
import { Router } from '@angular/router';
import { Screen } from '.././models/screen';
import { DynamicService } from '../shared/dynamic/dynamic.service';
@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  screens: Screen[] = [];

  loginDetails = {
    username: '',
    password: ''
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private dynamicService: DynamicService
  ) { }

  ngOnInit() {
  }

  handleLogin() {
    this.authService.handleLogin(this.loginDetails).subscribe(response => {
      if (response) {
        this.screens.push(...response.screenOrModules);
        this.dynamicService.setScreen(this.screens);
      }
      this.router.navigate(['/app']);

    },
      error => {
        console.log('Error in Login: ');
      });
  }
}
