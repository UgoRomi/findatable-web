interface AvailableTime {
  SeatingRuleId: number;
  Time: string;
  LimitedAvailability: boolean;
}

export interface RestaurantResponse {
  Date: string;
  Grouping: string;
  GroupingDescription: any;
  HasInProgressBookings: boolean;
  IsSoldOut: boolean;
  Status: 'AVAILABLE' | 'SOLD_OUT';
  AvailableTimes: AvailableTime[];
}
