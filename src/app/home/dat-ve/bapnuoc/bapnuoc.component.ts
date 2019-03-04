import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ve } from '../model/bapve';

@Component({
  selector: 'app-bapnuoc',
  templateUrl: './bapnuoc.component.html',
  styleUrls: ['./bapnuoc.component.css']
})
export class BapnuocComponent implements OnInit {

  



  


  
  DanhsachCombo:Ve[]=[
    {
      id:1,
      LoaiPhim:null,
      Combo:'Combo 1',
      Gia:5000,
      quantity:0
    },
    {
      id:2,
      LoaiPhim:null,
      Combo:'Combo 2',
      Gia:7000,
      quantity:0

    }
  ]
  constructor() { }

  ngOnInit() {
  }
  MienTang(ew:Ve){
    let index = this.DanhsachCombo.findIndex(item=>item.id === ew.id)
    if(index === -1){
      this.DanhsachCombo.push({...ew,quantity:1})

    }
    else{
      this.DanhsachCombo[index].quantity +=1;
      if(this.DanhsachCombo[index].quantity > 8)
      {
        this.DanhsachCombo[index].quantity = 1;
      }
    }
    console.log(this.DanhsachCombo);
    this.TinhTien();
    
  }

  MienGiam(e:Ve){
    let index = this.DanhsachCombo.findIndex(item=>item.id === e.id)
    if(index === -1)
    {
      this.DanhsachCombo.splice(index,1)
    }
   
    else{
      this.DanhsachCombo[index].quantity -=1;
      if(this.DanhsachCombo[index].quantity < 0)
      {
        this.DanhsachCombo[index].quantity = 0;
      }

  }
  this.TinhTien();


  }


  totalAmout:number;
  TinhTien(){
    this.totalAmout= 0 ;
    for(let item of this.DanhsachCombo){
      this.totalAmout += (item.quantity * item.Gia);
    }
  }

}
