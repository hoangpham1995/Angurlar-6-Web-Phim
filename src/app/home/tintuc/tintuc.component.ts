import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tintuc',
  templateUrl: './tintuc.component.html',
  styleUrls: ['./tintuc.component.css']
})
export class TintucComponent implements OnInit {
  DanhSachTinTuc=[
    {HinhAnhEvent:"../../../assets/img/even_2.jpg",TieuDe:"Trailer Trạng Quỳnh sặc mùi ‘drama’, Trấn Thành chiếm sóng hơi nhiều ",TrichDan:"Sau khi hé lộ những thông tin đầu tiên, bộ phim hài dân gian Trạng Quỳnh của đạo diễn Đức Thịnh tiếp tục tung ra trailer hấp dẫn."},
    {HinhAnhEvent:"../../../assets/img/even_2.jpg",TieuDe:"Trailer Trạng Quỳnh sặc mùi ‘drama’, Trấn Thành chiếm sóng hơi nhiều ",TrichDan:"Sau khi hé lộ những thông tin đầu tiên, bộ phim hài dân gian Trạng Quỳnh của đạo diễn Đức Thịnh tiếp tục tung ra trailer hấp dẫn. "}

  ]
  constructor() { }

  ngOnInit() {
  }

}
