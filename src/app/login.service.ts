import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  dummyLoginCredentials = {
    email: 'c@a.com',
    password: 'Ca'
  };
  username:'';
  constructor() { }

  authenticate(loginValues):Promise<any> {
    let authPromise = new Promise((resolve, reject) => {
      if (loginValues) {
        if (loginValues.email === this.dummyLoginCredentials.email
          && loginValues.password === this.dummyLoginCredentials.password) {
            this.username = loginValues.email.substring(0, loginValues.email.indexOf('@'));
          resolve({
            authenticated: true,
            username: this.username
          });
        }
      }
      resolve({
        authenticated: false
      });
    });
    return authPromise;
  }

}
