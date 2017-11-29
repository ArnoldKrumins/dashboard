import {Component, Input, OnInit} from '@angular/core';
import {Recommendation} from '../../models/recommendation';

@Component({
  selector: 'app-atomize-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss']
})
export class RecommendationComponent implements OnInit {

  @Input() recommendation: Recommendation;
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
