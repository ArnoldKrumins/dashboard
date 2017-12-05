import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-atomize-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  @Input() graphdata: Object;
  constructor() {
  }
  ngOnInit() {
  }

}
