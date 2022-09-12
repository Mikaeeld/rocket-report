import { EstDate } from "./result/estDate.interface";
import { Provider } from "./result/provider.interface";
import { Tag } from "./result/tag.interface";
import { Pad } from "./result/pad.interface";
import { Vehicle } from "./result/vehicle.interface";
import { Mission } from "./result/mission.interface";

export interface IResult {
  id: number;
  cospar_id: string;
  sort_date: string;
  name: string;
  provider: Provider;
  vehicle: Vehicle;
  pad: Pad;
  missions: Mission[];
  mission_description: string;
  launch_description: string;
  win_open: string;
  t0?: any;
  win_close?: any;
  est_date: EstDate;
  date_str: string;
  tags: Tag[];
  slug: string;
  weather_summary: string;
  weather_temp?: number;
  weather_condition: string;
  weather_wind_mph?: number;
  weather_icon: string;
  weather_updated?: Date;
  quicktext: string;
  media: any[];
  result: number;
  suborbital: boolean;
  modified: Date;
}
