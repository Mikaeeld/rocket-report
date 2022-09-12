import { Component, Input, OnInit } from '@angular/core';
import { LaunchesService } from '../../launches.service';

@Component({
  selector: 'app-launch-item',
  templateUrl: './launch-item.component.html',
  styleUrls: ['./launch-item.component.css'],
})
export class LaunchItemComponent implements OnInit {
  @Input() index: number;
  name: string = '';
  date: string = '';
  provider: string = '';

  constructor(private launchService: LaunchesService) {
    this.index = 0;
  }

  ngOnInit(): void {
    const launch = this.launchService.getLaunch(this.index);
    this.name = launch.name;
    this.date = launch.date;
    this.provider = launch.provider;
  }
}
