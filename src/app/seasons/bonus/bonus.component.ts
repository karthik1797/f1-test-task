import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from 'src/app/services/httpservice.service';

@Component({
  selector: 'app-bonus',
  templateUrl: './bonus.component.html',
  styleUrls: ['./bonus.component.scss'],
})
export class BonusComponent implements OnInit {
  constructor(private httpService: HttpserviceService) {}

  ngOnInit(): void {
    this.getBonusInfo();
  }
  private bonusData: any;
  public plusOneLap: any;
  public accident: any;
  public finished: any;

  async getBonusInfo() {
    const url = `2021/status.json`;
    this.httpService.getResponseData(url).subscribe({
      next: (res: any) => {
        if (res?.MRData?.StatusTable?.Status) {
          this.bonusData = res.MRData.StatusTable.Status;
          this.accident = this.bonusData[2].count;
          this.finished = this.bonusData[0].count;
          this.plusOneLap = this.bonusData[8].count;
        }
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
