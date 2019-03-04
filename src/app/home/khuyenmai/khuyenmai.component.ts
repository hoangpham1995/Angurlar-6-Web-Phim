import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-khuyenmai',
  templateUrl: './khuyenmai.component.html',
  styleUrls: ['./khuyenmai.component.css']
})
export class KhuyenmaiComponent implements OnInit {
  DanhSachKhuyenMai=[
    {HinhAnhEvent:"../../../assets/img/bg-2.png",TieuDe:"Ưu đãi 50% mùa phim cuối năm",TrichDan:"Cuối năm ngập tràn niềm vui với mã #MERRY50 của 123Phim, ưu đãi ngay 50%."},
    {HinhAnhEvent:"../../../assets/img/bg-2.png",TieuDe:"Ưu đãi 50% mùa phim cuối năm",TrichDan:"Cuối năm ngập tràn niềm vui với mã #MERRY50 của 123Phim, ưu đãi ngay 50%."}

  ]


  constructor() { }

  ngOnInit() {
  }

}
