import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atomize-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss']
})
export class RecommendationComponent implements OnInit {

  private isCollapsed = true;
  constructor() { }

  ngOnInit() {
  }
  collapsed(event: any): void {
    console.log(event);
  }
  expanded(event: any): void {
    console.log(event);
  }
}
