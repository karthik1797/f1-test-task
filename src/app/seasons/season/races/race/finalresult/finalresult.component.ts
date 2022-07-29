import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FinalResult } from 'src/app/types/final';

@Component({
  selector: 'app-finalresult',
  templateUrl: './finalresult.component.html',
  styleUrls: ['./finalresult.component.scss'],
})
export class FinalresultComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: [FinalResult]) {}
  public inputdata = this.data;

  ngOnInit(): void {}
}
