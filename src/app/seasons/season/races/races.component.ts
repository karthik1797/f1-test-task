import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, mergeMap, switchMap } from 'rxjs';
import { HttpserviceService } from 'src/app/services/httpservice.service';
import { Race } from 'src/app/types/race';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.scss'],
})
export class RacesComponent implements OnInit {
  offSet: number = 0;
  total: number = 0;
  year: any;
  races: [Race] = [
    {
      Circuit: {},
      Results: {},
      date: '',
      raceName: '',
      round: '',
      season: '',
      time: '',
      url: '',
    },
  ];
  constructor(
    private httpService: HttpserviceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.year = this.route.snapshot.paramMap.get('year');
    this.getRacesOfYearWithPostition();
  }

  getRacesOfYearWithPostition() {
    const url = `${this.year}/results.json?limit=10&offset=${this.offSet}`;
    this.httpService
      .getResponseData(url)
      .pipe(
        switchMap((response: any) => {
          this.total = response.MRData.total;
          const url1 = `${this.year}/results.json?limit=${this.total}`;
          return this.httpService.getResponseData(url1);
        })
      )
      .subscribe({
        next: (res: any) => {
          if (res?.MRData?.RaceTable?.Races) {
            this.races = res.MRData.RaceTable.Races;
          }
        },
        error: (err: any) => {
          console.log(err);
        },
      });
  }
}
