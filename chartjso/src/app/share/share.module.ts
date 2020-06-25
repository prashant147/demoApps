import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [BarChartComponent],
  exports:[BarChartComponent],
  imports: [
    ChartsModule,
    CommonModule
  ]
})
export class ShareModule { }
