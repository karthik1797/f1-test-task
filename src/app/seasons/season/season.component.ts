import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss'],
})
export class SeasonComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  year: any;
  ngOnInit(): void {
    this.year = this.route.snapshot.paramMap.get('year');
  }
}
