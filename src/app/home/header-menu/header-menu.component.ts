import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import { NguoiDungService } from 'src/app/services/nguoi-dung.service';
declare var $:any;


@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {
 public dangnhapLG:boolean = true;


  constructor(private _NguoiDung: NguoiDungService) { }
  user:any = '';
  tennguoidung:any = '';
  ngOnInit() {
  
    this._NguoiDung.loginDN.subscribe(
      res=>{
        // console.log(res)
        this.user = JSON.parse(localStorage.getItem('login'));
        this.tennguoidung = this.user.TaiKhoan;
     
        this.dangnhapLG = false;
      },
      err=>{
        console.log(err)
      }
      
    )



    if(localStorage.getItem('login') === null){
      this.dangnhapLG = true;
    }else{
      this.user = JSON.parse(localStorage.getItem('login'));
      this.tennguoidung = this.user.TaiKhoan;
      this.dangnhapLG = false;
    }

  }



  XoaLocal(){
    localStorage.removeItem('login');
    this.dangnhapLG = true;



  }




  
}
