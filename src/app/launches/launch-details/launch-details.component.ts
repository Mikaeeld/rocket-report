import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Launch } from 'src/app/models/models/launch.model';
import { LaunchesService } from '../launches.service';

@Component({
  selector: 'app-launch-details',
  templateUrl: './launch-details.component.html',
  styleUrls: ['./launch-details.component.css'],
})
export class LaunchDetailsComponent implements OnInit {
  public id: number = 0;
  public launch!: Launch;

  constructor(
    private route: ActivatedRoute,
    private launchService: LaunchesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.launch = this.launchService.getLaunch(this.id);
    });
    this.launchService.launchesChanged.subscribe(
      () => (this.launch = this.launchService.getLaunch(this.id))
    );
  }
}
