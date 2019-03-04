import { Component, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhimService } from 'src/app/services/phim.service';
import $ from 'jquery';
declare var $:any;

@Component({
  selector: 'app-item-chitiet',
  templateUrl: './item-chitiet.component.html',
  styleUrls: ['./item-chitiet.component.css']
})
export class ItemChitietComponent implements OnInit,AfterViewInit {
  public MaPhim:string;
  public ChiTietPhim:any ={} ;

  constructor(private activated:ActivatedRoute,private phimSV:PhimService,private router:Router) {}


  @Output() malichchieu = new EventEmitter()


 



  test(lichchieu){
    console.log('aaaa')
    localStorage.setItem('itemLichChieu',JSON.stringify(lichchieu));
    localStorage.setItem('chitietphim',JSON.stringify(this.ChiTietPhim));
    this.router.navigate(['/dat-ve',lichchieu.MaLichChieu])
  }

  ngAfterViewInit(){
    $(document).ready(function(){
      $('.venobox').venobox();  
    });

  }




  ngOnInit() {

    this.activated.params.subscribe(
      (kq)=>{
        this.MaPhim = kq.maphim;
        this.phimSV.LayChitietPhim(this.MaPhim).subscribe(
          (chiTiet) => {
            this.ChiTietPhim = chiTiet;
            console.log(this.ChiTietPhim)
          }
        )
      }
    )
    
  

  }






}
