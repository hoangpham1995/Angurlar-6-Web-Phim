import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ve } from '../model/bapve';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.css']
})
export class GheComponent implements OnInit {
  status:boolean = false;
  @Input() itemghe:Ve;
  @Output() emitGhe = new EventEmitter();

  constructor() { }

  ChonGhe(){
    this.status = !this.status;
    this.emitGhe.emit({
        stt:this.status,
        ghe:this.itemghe
    })
    
  }

  ngOnInit() {
  }



}
