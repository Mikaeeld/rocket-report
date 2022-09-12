import { IResult } from '../interfaces/launch-api/result.interface';

export class Launch {
  id: number;
  name: string;
  provider: string;
  date: string;
  launch_description: string;
  mission_description: string;
  vehicle_slug: string;
  imageURL: string;

  constructor(result: IResult) {
    this.id = result.id;
    this.name = result.name;
    this.provider = result.provider.name;
    this.date = result.date_str;
    this.launch_description = result.launch_description;
    this.mission_description = result.mission_description;
    this.vehicle_slug = result.vehicle.slug;
    if (this.vehicle_slug === 'falcon-9') {
      this.imageURL = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/in-this-spacex-handout-image-a-falcon-9-rocket-carrying-the-news-photo-1591219555.jpg';
    }
    else {
      this.imageURL = '';
    }
  }
}
