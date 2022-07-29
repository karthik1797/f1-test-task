import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeasonsComponent } from './seasons/seasons.component';
import { SeasonComponent } from './seasons/season/season.component';
import { DriversComponent } from './seasons/season/drivers/drivers.component';
import { RacesComponent } from './seasons/season/races/races.component';
import { RaceComponent } from './seasons/season/races/race/race.component';
import { FinalresultComponent } from './seasons/season/races/race/finalresult/finalresult.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { QualifyingResultComponent } from './seasons/season/races/race/qualifying-result/qualifying-result.component';
import { DriverStandingsComponent } from './seasons/season/races/race/driver-standings/driver-standings.component';
import { BonusComponent } from './seasons/bonus/bonus.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    SeasonsComponent,
    SeasonComponent,
    DriversComponent,
    RacesComponent,
    RaceComponent,
    FinalresultComponent,
    QualifyingResultComponent,
    DriverStandingsComponent,
    BonusComponent,
  ],
  imports: [
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
