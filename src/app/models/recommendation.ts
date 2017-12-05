import {Competitor} from './competitor';

export class Recommendation {
  Date: string
  RoomType: string;
  RoomName: string;
  NumberOfRooms: number;
  OriginalPrice: number;
  RecommendedPrice: number;
  PriceSaving: number;
  PredictedOccupancyFrom: number;
  PredictedOccupancyTo: number;
  RevParFrom: number;
  RevParTo: number;
  RevUntilAdjustedDateFrom: number;
  RevUntilAdjustedDateTo: number;
  Competitors: Array<Competitor>;
  Graphdata: Object;
}
