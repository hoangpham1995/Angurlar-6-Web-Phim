import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Ve } from '../../model/bapve';


@Component({
  selector: '[app-item-bap]',
  templateUrl: './item-bap.component.html',
  styleUrls: ['./item-bap.component.css']
})
export class ItemBapComponent implements OnInit {

  @Input() dsbap:Ve;
  @Output() sapgiambap = new EventEmitter();
  @Output() saptangbap = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }
  giam(){
    this.sapgiambap.emit(this.dsbap)
  }
  tang(){
    this.saptangbap.emit(this.dsbap)
  }


}
