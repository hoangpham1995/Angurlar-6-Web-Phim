import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatCheckboxModule,MatTabsModule,MatButtonModule,MatRadioModule
  ],
  exports:[MatCheckboxModule,MatTabsModule,MatButtonModule,MatRadioModule]
})
export class SharedModule { }
