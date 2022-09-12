import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { Launch } from 'src/app/models/models/launch.model';
import { LaunchesService } from '../launches.service';
import { NetworkService } from 'src/app/shared/services/network.service';
import { IResult, LaunchAPI } from 'src/app/launch.barrel';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.css'],
})
export class LaunchListComponent implements OnInit {
  public launches$ = new Subject<Launch[]>();
  public isLoading = true;

  public data$: Observable<LaunchAPI>;

  constructor(
    private launchesService: LaunchesService,
    private router: Router,
    private network: NetworkService
  ) {
    this.data$ = this.network.get<LaunchAPI>('https://fdo.rocketLaunch.live/json/launches/next/5');
    this.data$.subscribe(x => console.log(x))
  }

  public ngOnInit(): void {
    this.launches$ = this.launchesService.launchesChanged;
  }

  public onClick(i: number) {
    this.router.navigate([i]);
  }
}
