import { Component, OnInit,Input } from '@angular/core';
import $ from 'jquery';
declare var $:any;

@Component({
  selector: 'app-item-phim',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.css']
})
export class ItemPhimComponent implements OnInit {
  @Input() ItemFim;
  constructor() { 
  
  }

  ngOnInit() {
    $(document).ready(function(){
          $('.venobox').venobox();  
    })

  }
  

}
