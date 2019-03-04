import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  dangChieuStatus:boolean=true;

  constructor() { }
  HienPhimDangChieu(){
    this.dangChieuStatus = true;

  }
  HienPhimSapChieu(){
    this.dangChieuStatus = false;
    
  }
  ngOnInit() {

  }

 

}
