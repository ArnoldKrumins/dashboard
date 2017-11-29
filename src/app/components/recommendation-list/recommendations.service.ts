import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Recommendation} from '../../models/recommendation';

@Injectable()
export class RecommendationsService {
  constructor(private httpClient: HttpClient) {
  }

  getAll() {
    return this.httpClient.get<Array<Recommendation>>('../../assets/data/recommendations.json');
  }
}
