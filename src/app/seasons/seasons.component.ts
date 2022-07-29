import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../services/httpservice.service';
import { Season } from '../types/season';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss'],
})
export class SeasonsComponent implements OnInit {
  constructor(private httpService: HttpserviceService) {}
  listOfSeason: [Season] = [{ season: '', url: '' }];

  ngOnInit(): void {
    this.getSeasonsList();
  }
  async getSeasonsList() {
    let url = 'seasons.json?limit=5&offset=68';
    this.httpService.getResponseData(url).subscribe({
      next: (res: any) => {
        if (
          res.MRData &&
          res.MRData.SeasonTable &&
          res.MRData.SeasonTable.Seasons
        ) {
          this.listOfSeason = res.MRData.SeasonTable.Seasons;
        }
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
