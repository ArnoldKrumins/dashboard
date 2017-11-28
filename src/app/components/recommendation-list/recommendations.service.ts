import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface ItemsResponse {
  results: string[];
}

@Injectable()
export class RecommendationsService {
  results: string[];

  constructor(private http: HttpClient) {
  }

  getRecommendations() {
    this.http.get<ItemsResponse>('./data/recommendations.json').subscribe(data => {
      // data is now an instance of type ItemsResponse, so you can do this:
      this.results = data.results;
    });
  }
}
