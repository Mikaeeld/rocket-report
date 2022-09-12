import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Launch } from '../models/models/launch.model';
import { LaunchAPI } from '../models/interfaces/launch-api.interface';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LaunchesService {
  private launches: Launch[] = [];

  launchesChanged = new Subject<Launch[]>();

  constructor(private http: HttpClient) {}

  fetchLaunches() {
    setTimeout(() => {
      this.http
        .get<LaunchAPI>('https://fdo.rocketlaunch.live/json/launches/next/5')
        .subscribe((response) => {
          this.launches = response['result'].map(
            (launch) => new Launch(launch)
          );
          console.log(this.launches);
          this.launchesChanged.next(this.launches.slice());
        });
    }, 2000);
  }

  getLaunches() {
    return this.launches.slice();
  }

  getLaunch(int: number): Launch {
    return this.launches[int];
  }
}
