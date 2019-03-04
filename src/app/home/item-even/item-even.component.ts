import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-even',
  templateUrl: './item-even.component.html',
  styleUrls: ['./item-even.component.css']
})
export class ItemEvenComponent implements OnInit {

  @Input() Event;
  constructor() { }

  ngOnInit() {
  }

}
