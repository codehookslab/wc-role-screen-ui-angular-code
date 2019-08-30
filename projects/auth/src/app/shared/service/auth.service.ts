import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';

// export interface User {
//   uid: number;
//   username: string;
//   password: string;
//   firstName: string;
//   lastName: string;
//   validFrom: Date;
//   validUpto: Date;
//   role: Role;
//   screenOrModules: Screen[];
// }

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  handleLogin(loginDetails: { username, password }) {
    console.log('In service')
    console.log(loginDetails)
    return this.http.post<User>('/auth/login', loginDetails);
    // this.router.navigate(['/app'])
  }
}
