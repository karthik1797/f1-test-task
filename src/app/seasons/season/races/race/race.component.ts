import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DriverStandingsComponent } from './driver-standings/driver-standings.component';
import { FinalresultComponent } from './finalresult/finalresult.component';
import { QualifyingResultComponent } from './qualifying-result/qualifying-result.component';
@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss'],
})
export class RaceComponent implements OnInit {
  @Input() roundData: any;
  showFinalResultData: boolean = false;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  showFinalResult() {
    let dialogRef = this.dialog.open(FinalresultComponent, {
      height: '800px',
      width: '800px',
      data: this.roundData.Results,
    });
  }
  showQualifyingResult() {
    let dialogRef = this.dialog.open(QualifyingResultComponent, {
      height: '800px',
      width: '800px',
      data: { season: this.roundData.season, round: this.roundData.round },
    });
  }
  showDriverStandingsResult() {
    let dialogRef = this.dialog.open(DriverStandingsComponent, {
      height: '800px',
      width: '800px',
      data: { season: this.roundData.season, round: this.roundData.round },
    });
  }
}
