import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';
import { HeaderLoginComponent } from './layout-admin/header-login/header-login.component';
import { DashboardComponent } from './layout-admin/dashboard/dashboard.component';
import { AddmoiveComponent } from './layout-admin/addmoive/addmoive.component';
import { FooterComponent } from './layout-admin/footer/footer.component';
import { DanhsachComponent } from './layout-admin/dashboard/danhsach/danhsach.component';


@NgModule({
  declarations: [LayoutAdminComponent, HeaderLoginComponent, DashboardComponent, AddmoiveComponent, FooterComponent, DanhsachComponent],
  imports: [
    CommonModule
  ],
  exports:[LayoutAdminComponent,HeaderLoginComponent, DashboardComponent, AddmoiveComponent]
})
export class AdminModule { }
