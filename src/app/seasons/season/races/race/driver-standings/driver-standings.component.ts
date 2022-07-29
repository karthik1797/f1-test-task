import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpserviceService } from 'src/app/services/httpservice.service';
import { Standing } from 'src/app/types/standing';

@Component({
  selector: 'app-driver-standings',
  templateUrl: './driver-standings.component.html',
  styleUrls: ['./driver-standings.component.scss'],
})
export class DriverStandingsComponent implements OnInit {
  constructor(
    private httpService: HttpserviceService,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}
  public driverStanding: [Standing] = [
    {
      Constructors: {},
      Driver: {},
      points: '',
      position: '',
      positionText: '',
      wins: '',
    },
  ];
  ngOnInit(): void {
    this.getDriverStandings();
  }

  async getDriverStandings() {
    const url = `${this.data.season}/${this.data.round}/driverStandings.json`;
    this.httpService.getResponseData(url).subscribe({
      next: (res: any) => {
        if (
          res.MRData &&
          res.MRData.StandingsTable &&
          res.MRData.StandingsTable.StandingsLists &&
          res.MRData.StandingsTable.StandingsLists[0].DriverStandings
        ) {
          this.driverStanding =
            res.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        }
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
