import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-my-radar-chart',
  templateUrl: './my-radar-chart.component.html',
  styleUrls: ['./my-radar-chart.component.scss']
})
export class MyRadarChartComponent implements OnInit {
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public Chartdata = [];
  public barChartLabels = [];
  public barChartType = 'line';
  public barChartLegend = true;
  public barChartData = [
    {data: [], label: 'country'},
   
  ];
  constructor(public _service:UserService) { }

  ngOnInit() {
    this.Chartdata = this._service.getData();

    for (var key in this.Chartdata) { 
      this.barChartLabels.push(key);
      for (var key1 in this.Chartdata[key]) {
           this.barChartData[0].data.push(this.Chartdata[key][key1].gdp2);
      }
    }
  }

}
