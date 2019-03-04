import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DangkyComponent } from './dangky/dangky.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { IsotopeModule } from 'ngx-isotope';
import { ThongbaolichComponent } from './thongbaolich/thongbaolich.component';
import { EvenComponent } from './even/even.component';

import { DangChieuComponent } from './dang-chieu/dang-chieu.component';
import { SapChieuComponent } from './sap-chieu/sap-chieu.component';
import { ItemPhimComponent } from './item-phim/item-phim.component';
import { KhuyenmaiComponent } from './khuyenmai/khuyenmai.component';
import { SukienComponent } from './sukien/sukien.component';
import { TintucComponent } from './tintuc/tintuc.component';
import { ItemEvenComponent } from './item-even/item-even.component';
import { SeachPhimComponent } from './seach-phim/seach-phim.component';
import { TrangchitiettComponent } from './trangchitiett/trangchitiett.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { ItemChitietComponent } from './trangchitiett/item-chitiet/item-chitiet.component';


import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { FormsModule } from '@angular/forms';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { DatVeComponent } from './dat-ve/dat-ve.component';
import { VeComponent } from './dat-ve/ve/ve.component';
import { BapnuocComponent } from './dat-ve/bapnuoc/bapnuoc.component';
import { DatgheComponent } from './dat-ve/datghe/datghe.component';
import { GheComponent } from './dat-ve/ghe/ghe.component';
import { ItemVeComponent } from './dat-ve/ve/item-ve/item-ve.component';
import { ItemBapComponent } from './dat-ve/bapnuoc/item-bap/item-bap.component';
import { ThanhtoanComponent } from './thanhtoan/thanhtoan.component';
import { CopyComponent } from './footer/copy/copy.component';



@NgModule({
  declarations: [IndexComponent,HomeLayoutComponent, HeaderComponent, FooterComponent, SidebarComponent, DangkyComponent, DangnhapComponent,ThongbaolichComponent, EvenComponent,DangChieuComponent,SapChieuComponent,ItemPhimComponent, KhuyenmaiComponent, SukienComponent, TintucComponent, ItemEvenComponent, SeachPhimComponent, TrangchitiettComponent, TrangChuComponent, ItemChitietComponent, HeaderMenuComponent, DatVeComponent, VeComponent, BapnuocComponent, DatgheComponent, GheComponent, ItemVeComponent, ItemBapComponent, ThanhtoanComponent, CopyComponent],
  imports: [
    CommonModule,
    SharedModule, 
    RouterModule,
    IsotopeModule,
    FormsModule,
    CarouselModule

    

    
  ],
  exports:[IndexComponent,HomeLayoutComponent, HeaderComponent, FooterComponent, SidebarComponent, DangkyComponent, DangnhapComponent,ThongbaolichComponent, EvenComponent,DangChieuComponent,SapChieuComponent,ItemPhimComponent, KhuyenmaiComponent, SukienComponent, TintucComponent,ItemEvenComponent,SeachPhimComponent,TrangchitiettComponent,TrangChuComponent, HeaderMenuComponent,DatVeComponent,ThanhtoanComponent]
})
export class HomeModule { }
