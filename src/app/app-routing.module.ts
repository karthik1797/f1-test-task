import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeasonComponent } from './seasons/season/season.component';
import { SeasonsComponent } from './seasons/seasons.component';

const routes: Routes = [
  {
    path: '',
    component: SeasonsComponent,
  },
  {
    path: 'season/:year',
    component: SeasonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
