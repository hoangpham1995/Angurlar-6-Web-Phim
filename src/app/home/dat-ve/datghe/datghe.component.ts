import { Component, OnInit, Output,EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { PhimService } from 'src/app/services/phim.service';


@Component({
  selector: 'app-datghe',
  templateUrl: './datghe.component.html',
  styleUrls: ['./datghe.component.css']
})
export class DatgheComponent implements OnInit, OnChanges {
  @Output() itemQuay=new EventEmitter();



  
  public status:boolean = true;
  public MaLichChieu:string;
  public DanhSachGheNgoi:any[]=[];

  MangGheDaChon=[];


  constructor(private activatedRoute:ActivatedRoute, private PhimSV:PhimService) { }
  SoGheDaDat:number = 0 ;
  SoGheDaChon:number = 0;

  DanhSachDangDat = [];

LayTaiKhoanNguoiDung(){
  let nguoiDungHienTai = JSON.parse(localStorage.getItem('login'));
  if(nguoiDungHienTai !== null){
    return nguoiDungHienTai.TaiKhoan;

  }
  else{
    alert('Vui Lòng Đăng Nhập Để Đặt Ghế');
    return false;
  }

}




ngOnChanges(changes:SimpleChanges){
      this.SoGheDaDat= this.DanhSachGheNgoi.length
}


  datGheParent(ez){

    //Tạo 1 đối tượng oject ve gửi lên sever 

    
    let ve :{MaGhe:string,GiaVe:number}={
      MaGhe:ez.ghe.MaGhe,
      GiaVe:ez.ghe.GiaVe
    }
    
    if(ez.stt){
      this.SoGheDaDat++;
      this.SoGheDaChon--;
      this.MangGheDaChon.push(ve);
      console.log(this.MangGheDaChon)


    }
    
    else{
      this.SoGheDaDat--;
      this.SoGheDaChon++;

      for(let index in this.MangGheDaChon){
        if(this.MangGheDaChon[index].MaGhe== ez.ghe.MaGhe){
          this.MangGheDaChon.splice(parseInt(index),1)
          console.log(this.MangGheDaChon)
        }
      }
    }


 

  }




  ngOnInit() {
    this.activatedRoute.params.subscribe(
      kq=>{
        this.MaLichChieu = kq.malichchieu;
        this.PhimSV.LayChiTietPhongVe(this.MaLichChieu).subscribe(
          result =>{
            this.DanhSachGheNgoi = result.DanhSachGhe;
            console.log(this.DanhSachGheNgoi)
          
          },
          eror=>{
            console.log(eror)
          }
        )
      }
      ,
      err=>{
        console.log(err)

      }
    )
  }



  QuayLai(){
    this.itemQuay.emit(this.status)
  }




 
  


 
}
