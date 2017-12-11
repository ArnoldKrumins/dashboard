import {Component, Input, OnInit} from '@angular/core';
import {RecommendationsService} from './recommendations.service';
import {Recommendation} from '../../models/recommendation';
import {Hotel} from '../../models/hotel';
import {IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts} from 'angular-2-dropdown-multiselect';
import {SpinnerDirective} from '../../directives/spinner.directive';
import 'rxjs/add/operator/distinctUntilChanged';


@Component({
  selector: 'app-atomize-recommendation-list',
  providers: [RecommendationsService, SpinnerDirective],
  templateUrl: './recommendation-list.component.html',
  styleUrls: ['./recommendation-list.component.scss']
})
export class RecommendationListComponent implements OnInit {
  private busy = false;
  @Input() Hotels: Array<Hotel> = new Array<Hotel>();
  @Input() Currency: string;
  texts: IMultiSelectTexts = {
    defaultTitle: 'Select room types'
  };

  settings: IMultiSelectSettings = {
    buttonClasses: 'btn btn-default btn-block btn-atomize',
    dynamicTitleMaxItems: 3,
    displayAllSelectedText: true
  };
  roomTypes: Array<number>;
  options: IMultiSelectOption[];
  public recommendations: Array<Recommendation>;

  constructor(private service: RecommendationsService) {
    this.busy = true;
    this.service.getAll()
      .subscribe(data => {
        this.recommendations = data;
        this.busy = false;
      });
  }
  ngOnInit() {
  }
  onHotelChange(id) {
    this.options = this.Hotels.filter(x => x.id === id).map(y => y.roomtypes)[0];
  }
  onRoomTypeChange() {
    if (this.roomTypes.length === 0 ) {
      return;
    }
    this.busy = true;
    this.service.getByRoomType(this.roomTypes)
      .distinctUntilChanged()
      .subscribe(data => {
        this.recommendations = data;
        this.busy = false;
      });
  }


}
