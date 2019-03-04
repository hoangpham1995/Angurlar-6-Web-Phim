import { Injectable, Output,EventEmitter } from '@angular/core';
import { Http,Headers,Response } from '@angular/http';
import { Phim } from '../model/phim';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class NguoiDungService {
  @Output() loginDN = new EventEmitter();

  constructor(private _http:Http) { }

  DangNhap(taiKhoan:string,matKhau:string){
    let  headerDN = new Headers();
    headerDN.append('Content-Type', 'application/json;charset=UTF-8');
    let url=`http://sv2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=${taiKhoan}&matkhau=${matKhau}`;
    let obServe = this._http.post(url,undefined,{headers:headerDN})
    .pipe(map((res:Response)=>res.json()));
    return obServe;

  }



  ThemNguoiDung(nguoiDung:Phim){
    let headerDK = new Headers();
    headerDK.append('Content-Type', 'application/json;charset=UTF-8');
    let obServe = this._http.post("http://sv2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung",nguoiDung,{ headers: headerDK })
      .pipe(
        map((res:Response) => res.json())
      );
      return obServe;
  }
}
