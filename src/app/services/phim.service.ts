import { Injectable, Output, EventEmitter } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhimService {

  constructor( private _http:Http) { }
  LayDanhSachPhim():Observable<any>{
    let urlDanhsachphim = `http://sv2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP02`;
    let obServes =  this._http.get(urlDanhsachphim).pipe(map((result:Response)=> result.json()));
    return obServes;
  }
  
  LayChitietPhim(maPhim){
      let urlChitietPhim = `http://sv2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${maPhim}`;
      let obServes =  this._http.get(urlChitietPhim)
      .pipe(map((result:Response)=> result.json()));
      return obServes;
  }
  LayChiTietPhongVe(maLichChieu){
    let urlChiTietPhongVe =`http://sv2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=${maLichChieu}`;
    let obServes =  this._http.get(urlChiTietPhongVe)
    .pipe(map((result:Response)=> result.json()));
    return obServes;

  }
}

