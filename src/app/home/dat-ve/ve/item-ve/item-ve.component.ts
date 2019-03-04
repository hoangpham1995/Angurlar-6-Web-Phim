import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Ve } from '../../model/bapve';


@Component({
  selector: '[app-item-ve]',
  templateUrl: './item-ve.component.html',
  styleUrls: ['./item-ve.component.css']
})
export class ItemVeComponent implements OnInit {
  @Input() dsve:Ve;
  @Output() tangsao=new EventEmitter;
  @Output() giamsao=new EventEmitter
  constructor() { }

  ngOnInit() {
  }


  tang(){
    this.tangsao.emit(this.dsve)
  }
  giam(){
    this.giamsao.emit(this.dsve)
  }

}
