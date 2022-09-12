import { Component, OnInit } from '@angular/core';
import { LaunchesService } from './launches.service';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements OnInit {

  constructor(private launchService: LaunchesService) { }

  ngOnInit(): void {
    this.launchService.fetchLaunches();
  }

}
