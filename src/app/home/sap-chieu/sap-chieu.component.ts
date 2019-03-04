import { Component, OnInit, AfterViewInit } from '@angular/core';
import $ from 'jquery';

declare var $:any;

@Component({
  selector: 'app-sap-chieu',
  templateUrl: './sap-chieu.component.html',
  styleUrls: ['./sap-chieu.component.css']
})
export class SapChieuComponent implements OnInit {

     DanhSachPhimSapChieu=[
         {TenPhim:"What They Had",HinhAnh:"../../../assets/img/movie-4.jpg",ThoiLuong:"105",Trailer:"https://www.youtube.com/watch?v=1kBGxsyp__o"},
        {TenPhim:"Hold the Dark",HinhAnh:"../../../assets/img/movie-5.jpg",ThoiLuong:"124",Trailer:"https://www.youtube.com/watch?v=OFAwDO6b5KI"},
         {TenPhim:"Aquaman",HinhAnh:"../../../assets/img/movie-6.jpg",ThoiLuong:"90",Trailer:"https://www.youtube.com/watch?v=WDkg3h8PCVU&t=2s"},
         {TenPhim:"Avengers: Infinity War",HinhAnh:"../../../assets/img/movie-10.png",ThoiLuong:"90",Trailer:"https://www.youtube.com/watch?v=6ZfuNTqbHE8"},
     ]

  constructor() { }

  customOptions:any = {
    loop: true,
  
    dots: true,
    navSpeed: 700,
     
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

  }

}
