import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NguoiDungService } from 'src/app/services/nguoi-dung.service';
import { NgForm } from '@angular/forms';
import $ from 'jquery';
import { Subscription } from 'rxjs';
declare var $:any;

@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit,OnDestroy {
  dangNhapSubscription: Subscription;
  
  @ViewChild('formDN') fromDangNhap:NgForm

  constructor(private _NguoiDung:NguoiDungService) { }

  ngOnInit() {


  }

  thongBao:string="";

  dangNhap(formDN:NgForm){
    var taiKhoan = formDN.value.TaiKhoan;
    var matKhau = formDN.value.MatKhau;
     this._NguoiDung.DangNhap(taiKhoan,matKhau).subscribe(
       res=>{

        if(typeof res === 'string'){
      
              this.thongBao = res;  
        }
        else{
               
          localStorage.setItem('login',JSON.stringify(res));
          this._NguoiDung.loginDN.emit(res);
          $('.close').trigger('click');   

        }

        
        setTimeout(()=>{
          this.thongBao = '';
        },5000)

       },
       
       err=>{
         console.log(err);
       }
       
     )
     this.fromDangNhap.reset();

  }



    ngOnDestroy(){
      if(this.dangNhapSubscription){
        this.dangNhapSubscription.unsubscribe();
      }
    }
  
}
