import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Ve } from '../model/bapve';



@Component({
  selector: 'app-ve',
  templateUrl: './ve.component.html',
  styleUrls: ['./ve.component.css']
})
export class VeComponent implements OnInit {
 


  LoaiVe:Ve[]=[
     {
       id:1,
       LoaiPhim:'Người Lớn',
       Combo:null,
       Gia:8000,
        quantity:4

     

     }
  ]

  constructor() { }

  ngOnInit() {
  }
  
  
  
  MienTang(e:Ve){

    let index = this.LoaiVe.findIndex(item=>item.id === e.id)
    if(index === -1){
      this.LoaiVe.push({...e,quantity:1})
      
    }

    else{
      this.LoaiVe[index].quantity +=1;
      
      if(this.LoaiVe[index].quantity > 4)
      {
        this.LoaiVe[index].quantity = 1;
      }
    }

  
    this.TinhTien();
    
  }


  MienGiam(ew:Ve){
    let index = this.LoaiVe.findIndex(item=>item.id === ew.id)
    if(index === -1){
     
       
        this.LoaiVe.splice(index,1)
      
      
    }
    else{
      this.LoaiVe[index].quantity -=1;
      if(this.LoaiVe[index].quantity < 1)
      {
        this.LoaiVe[index].quantity = 1;
      }

  }
  this.TinhTien();
}

  totalAmout:number;
  TinhTien(){
    this.totalAmout= 0 ;
    for(let item of this.LoaiVe){
      this.totalAmout += (item.quantity * item.Gia);
    }
  }


}
