import { Component, OnInit } from '@angular/core';
import { PhimService } from 'src/app/services/phim.service';
import { ActivatedRoute } from '@angular/router';
import { Ve } from './model/bapve';



@Component({
  selector: 'app-dat-ve',
  templateUrl: './dat-ve.component.html',
  styleUrls: ['./dat-ve.component.css']
})
export class DatVeComponent implements OnInit {
 
  public status:boolean = true;
  public MaPhim:string;
  public ChiTietPhim:any ={} ;
  
  DanhsachCombo:Ve[]=[]



  constructor(private activated:ActivatedRoute,private _phimSV:PhimService) { }



  ngOnInit() {

    
    this.activated.params.subscribe(

      (kq)=>{
        this.MaPhim = JSON.parse(localStorage.getItem('itemLichChieu'));
        this.ChiTietPhim = JSON.parse(localStorage.getItem('chitietphim'));
      }
    )
   

  }

  AnGhe(){
    this.status = false;
  }
  
  HienGhe(){
    this.status = true;
  }






 





}
