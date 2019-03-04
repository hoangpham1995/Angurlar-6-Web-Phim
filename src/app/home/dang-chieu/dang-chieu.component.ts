import { Component, OnInit, AfterViewInit } from '@angular/core';
import $ from 'jquery';
import { PhimService } from 'src/app/services/phim.service';
import { Phim } from 'src/app/model/phim';
declare var $:any;
@Component({
  selector: 'app-dang-chieu',
  templateUrl: './dang-chieu.component.html',
  styleUrls: ['./dang-chieu.component.css']
})
export class DangChieuComponent implements OnInit {
  


  constructor(private phimSV:PhimService) { }

  public DanhSachPhim:Phim[] = [];


  customOptions:any = {
    loop: true,
    dots: false,
    navSpeed: 700,
    nav:true,
    navText: [ '', '' ],
    margin: 20, 
    autoplay:true,
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
  
  }


 
  
  ngOnInit() {
    
  

    this.phimSV.LayDanhSachPhim().subscribe(
      (kq:any)=>{
        this.DanhSachPhim = kq;
        console.log(kq)
      
      },
      (err)=>{
          console.log(err);
      }

    )

    
   


  }

}
