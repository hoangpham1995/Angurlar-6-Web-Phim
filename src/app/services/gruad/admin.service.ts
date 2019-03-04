import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private isLogin: boolean = false;
  private isAdmin:boolean = false;

  getIslogin() {
    return this.isLogin;
  }
  getisAdmin(){
    return this.isAdmin;
  }

  checkLogin() {
    var currenUser = localStorage.getItem('login');
    if (currenUser) {
      this.isLogin = true;
      return JSON.parse(currenUser) ;
    }
    else {
      this.isLogin = false;
    }
  }

  constructor() { }
}
