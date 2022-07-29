import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpserviceService } from 'src/app/services/httpservice.service';
import { ActivatedRoute } from '@angular/router';
import { Driver } from 'src/app/types/driver';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss'],
})
export class DriversComponent implements OnInit, OnDestroy {
  constructor(
    private httpService: HttpserviceService,
    private route: ActivatedRoute
  ) {}

  offSet: number = 0;
  total: number = 0;
  public totalPage = 0;
  public currentPage = 1;
  drivers: [Driver] = [
    {
      code: '',
      dateOfBirth: '',
      driverId: '',
      familyName: '',
      givenName: '',
      nationality: '',
      permanentNumber: '',
      url: '',
    },
  ];
  year: any;
  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.year = this.route.snapshot.paramMap.get('year');
    this.getDriversOfYear();
  }

  getDriversOfYear() {
    const url = `${this.year}/drivers.json?limit=10&offset=${this.offSet}`;
    this.httpService.getResponseData(url).subscribe({
      next: (res: any) => {
        if (res.MRData && res.MRData.DriverTable && res.MRData.total) {
          this.drivers = res.MRData.DriverTable.Drivers
            ? res.MRData.DriverTable.Drivers
            : {};
          this.total = res.MRData.total;
          this.totalPage = parseInt('' + this.total / 10);
        }
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  loadNextDriverList() {
    this.offSet = this.offSet + 10;
    if (this.total > this.offSet + 1) {
      this.currentPage += 1;
      this.getDriversOfYear();
    } else {
      alert(`Reached Last Page`);
      this.offSet = this.total - 10;
    }
  }

  loadPreviousDriverList() {
    if (this.offSet > 0) {
      this.currentPage -= 1;
      this.offSet = this.offSet - 10;
      this.getDriversOfYear();
    } else {
      alert(`Reached First Page`);
      this.offSet = 0;
    }
  }
  ngOnDestroy(): void {
    this.offSet = 0;
    this.total = 0;
  }
}
