import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { LaunchListComponent } from './launches/launch-list/launch-list.component';
import { LaunchItemComponent } from './launches/launch-list/launch-item/launch-item.component';
import { LaunchDetailsComponent } from './launches/launch-details/launch-details.component';
import { LaunchesComponent } from './launches/launches.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SERVICES } from './shared/services';
import { NetworkService } from './shared/services/network.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LaunchListComponent,
    LaunchItemComponent,
    LaunchDetailsComponent,
    LaunchesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatGridListModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  providers: [SERVICES],
  bootstrap: [AppComponent]
})
export class AppModule { }
