import { Component, OnInit } from '@angular/core';
import {RecommendationsService} from './recommendations.service';
import {Recommendation} from '../../models/recommendation';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-atomize-recommendation-list',
  providers: [RecommendationsService],
  templateUrl: './recommendation-list.component.html',
  styleUrls: ['./recommendation-list.component.scss']
})
export class RecommendationListComponent implements OnInit {

  public recommendations: Observable<Recommendation[]>;

  constructor(private service: RecommendationsService) {
    this.recommendations = new Observable<Recommendation[]>();
    this.recommendations = this.service.getAll();
  }

  ngOnInit() {
  }

}
