import {Component, Input, OnInit} from '@angular/core';
import {RecommendationsService} from './recommendations.service';
import {Recommendation} from '../../models/recommendation';
import {Observable} from 'rxjs/Observable';
import {Hotel} from '../../models/hotel';
import {IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts} from 'angular-2-dropdown-multiselect';
import {Roomtype} from '../../models/roomtype';
import {SpinnerDirective} from '../../directives/spinner.directive';

@Component({
  selector: 'app-atomize-recommendation-list',
  providers: [RecommendationsService],
  templateUrl: './recommendation-list.component.html',
  styleUrls: ['./recommendation-list.component.scss']
})
export class RecommendationListComponent implements OnInit {

  @Input() Hotels: Array<Hotel> = new Array<Hotel>();
  @Input() Currency: string;
  private selectedHotel: any;

  private texts: IMultiSelectTexts = {
     defaultTitle: 'Select room types'
  };

  private settings: IMultiSelectSettings = {
    buttonClasses: 'btn btn-default btn-block btn-atomize',
    dynamicTitleMaxItems: 3,
    displayAllSelectedText: true
  };
  private roomTypes: Array<number>;
  private options: IMultiSelectOption[];
  public recommendations: Observable<Recommendation[]>;
  constructor(private service: RecommendationsService) {
    this.recommendations = new Observable<Recommendation[]>();
    this.recommendations = this.service.getAll();
  }

  ngOnInit() {
  }

  onHotelChange(id) {
    this.options = this.Hotels.filter(x => x.id === id ).map(y => y.roomtypes)[0];
  }

  onChange() {
    console.log(this.roomTypes);
  }
}
