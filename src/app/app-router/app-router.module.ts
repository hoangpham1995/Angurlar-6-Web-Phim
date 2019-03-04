import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from '../home/home-layout/home-layout.component';
import { LayoutAdminComponent } from '../admin/layout-admin/layout-admin.component';
import { TrangchitiettComponent } from '../home/trangchitiett/trangchitiett.component';
import { TrangChuComponent } from '../home/trang-chu/trang-chu.component';
import { DatVeComponent } from '../home/dat-ve/dat-ve.component';
import { LoginGuard } from '../services/gruad/login.guard';


const appRouter:Routes = [
  {path:'',component:HomeLayoutComponent,children:[
    {path:'',component:TrangChuComponent},
    {path:'chi-tiet/:maphim',component:TrangchitiettComponent},
    {path:'dat-ve/:malichchieu',component:DatVeComponent,canActivate:[LoginGuard]}
  ]},
  {path:'admin',component:LayoutAdminComponent}

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRouter)]
})
export class AppRouterModule { }
