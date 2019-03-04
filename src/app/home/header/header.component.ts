import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $('.menu_toggle').click(function () {
        $('nav').toggleClass('active')
      })
    });

    $(document).ready(function () {
      $('.menu_toggle').click(function () {
        $('.menu_toggle').toggleClass('active')
      })
    })







  }




};



