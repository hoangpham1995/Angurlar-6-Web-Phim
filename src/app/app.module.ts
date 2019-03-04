import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module';
import { OwlModule } from 'ngx-owl-carousel';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router/app-router.module';
import { IsotopeModule } from 'ngx-isotope';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent
     
  ],
  imports: [
    BrowserModule,
   
    HomeModule,
    AdminModule,
    OwlModule,
    SharedModule,
    RouterModule,
    AppRouterModule,
    IsotopeModule,
    HttpModule,
    BrowserAnimationsModule
   

    
    
  
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
