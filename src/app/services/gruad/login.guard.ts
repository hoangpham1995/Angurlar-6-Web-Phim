import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from './admin.service';
import swal from 'sweetalert';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private _auth:AdminService,private _routers:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      this._auth.checkLogin();
      console.log(this._auth.getIslogin())
      if(this._auth.getIslogin()){
          return true;
      }
      else{
        swal("Vui Lòng Đăng Nhập !");
        this._routers.navigate(['/chi-tiet'])
        
      }
      





  
  }
}
