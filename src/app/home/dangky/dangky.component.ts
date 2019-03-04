import { Component, OnInit, ViewChild } from '@angular/core';
import $ from 'jquery';
import { NgForm } from '@angular/forms';
import { NguoiDungService } from 'src/app/services/nguoi-dung.service';
import { from } from 'rxjs';
declare var $:any;




@Component({
  selector: 'app-dangky',
  templateUrl: './dangky.component.html',
  styleUrls: ['./dangky.component.css']
})
export class DangkyComponent implements OnInit {
  @ViewChild('formDK') formDangKy:NgForm;

  

  thongBao:string="";
   

  constructor(private _nguoiDungSV:NguoiDungService) { }
  
  messageArr:string[]=[
    '',
    'Đăng Ký Thành Công'
  ]
  message:string=this.messageArr[0];

  showMessage(mes){
    this.message = mes;
    setTimeout(()=>{
      this.message = this.messageArr[0];
    },3000)
  }


  ngOnInit() {
  

      $(".toggle-password").click(function() {
  
          $(this).toggleClass("zmdi-eye zmdi-eye-off");
          var input = $($(this).attr("toggle"));
          if (input.attr("type") == "password") {
            input.attr("type", "text");
          } else {
            input.attr("type", "password");
          }
        });

        
  
  
  }

  dangky(form:any){
    
    this._nguoiDungSV.ThemNguoiDung(form.value)
      
    .subscribe(
      
      (res:any)=>{
  
        
        if(typeof res === 'string'){
          
            this.thongBao = res;

        }
        else{
          this.showMessage(this.messageArr[1])  
        }
        

        setTimeout(()=>{
          this.thongBao = '';
        },5000)


   
    
      },
      
      (err:any)=>{
        console.log(err)
      }
   

     
    )


    this.formDangKy.reset();
  }

}
