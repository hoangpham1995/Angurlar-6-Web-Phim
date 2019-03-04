import { Component, OnInit, AfterViewInit } from '@angular/core';
import $ from 'jquery';

declare var $:any;

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  evendangchiu:boolean =true;

  LoaiTinTuc:string = "KhuyenMai";
  constructor() { }
  
  ChonLoaiTin(val){
    this.LoaiTinTuc = val;
  }
  ngOnInit() {
  
  }

}
