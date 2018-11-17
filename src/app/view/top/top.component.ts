import { Component, OnInit } from '@angular/core';

// declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#theta-viewer').createThetaViewer('/assets/photo1.png');
  }

  toggle() {
    console.log('toggle');
    // $('#theta-viewer').createThetaViewer('/assets/photo1.png');
  }
}
