import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  file: string;

  constructor(
    private route: ActivatedRoute,
    /* private router: Router, */) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { file: string }) => {
        // console.log('testtest', data.file);
        this.file = data.file || 'photo1.png';
        $('#theta-viewer').createThetaViewer('./assets/' + this.file);
      });
  }

  toggle() {
    // console.log('toggle');
    // $('#theta-viewer').createThetaViewer('/assets/photo1.png');
  }
}
