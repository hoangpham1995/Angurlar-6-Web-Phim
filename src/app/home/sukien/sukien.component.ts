import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sukien',
  templateUrl: './sukien.component.html',
  styleUrls: ['./sukien.component.css']
})
export class SukienComponent implements OnInit {
  DanhSachSuKien=[
    {HinhAnhEvent:"../../../assets/img/even_4.jpg",TieuDe:"Mua 2, Tặng 1",TrichDan:"Nhận ngay 1 vé miễn phí khi đặt 2 vé trên ứng dụng 123Phim."},
    {HinhAnhEvent:"../../../assets/img/even_4.jpg",TieuDe:"Mua 2, Tặng 1",TrichDan:"Nhận ngay 1 vé miễn phí khi đặt 2 vé trên ứng dụng 123Phim."}

  ]
  constructor() { }

  ngOnInit() {
  }

}
