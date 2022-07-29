import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpserviceService } from 'src/app/services/httpservice.service';
import { QualifyingResult } from 'src/app/types/qualifying';

@Component({
  selector: 'app-qualifying-result',
  templateUrl: './qualifying-result.component.html',
  styleUrls: ['./qualifying-result.component.scss'],
})
export class QualifyingResultComponent implements OnInit {
  public qualifyingResult: [QualifyingResult] = [
    {
      Constructor: {},
      Driver: {},
      Q1: '',
      Q2: '',
      Q3: '',
      number: '',
      position: '',
    },
  ];
  constructor(
    private httpService: HttpserviceService,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}

  ngOnInit(): void {
    this.getQualifyingResult();
  }
  async getQualifyingResult() {
    const url = `${this.data.season}/${this.data.round}/qualifying.json`;
    this.httpService.getResponseData(url).subscribe({
      next: (res: any) => {
        if (
          res.MRData &&
          res.MRData.RaceTable &&
          res.MRData.RaceTable.Races &&
          res.MRData.RaceTable.Races[0].QualifyingResults
        ) {
          this.qualifyingResult =
            res.MRData.RaceTable.Races[0].QualifyingResults;
        }
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
