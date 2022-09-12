import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchDetailsComponent } from './launches/launch-details/launch-details.component';
import { LaunchesComponent } from './launches/launches.component';

const routes: Routes = [
  {
    path: '',
    component: LaunchesComponent,
    children: [{ path: ':id', component: LaunchDetailsComponent }],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
