import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.scss']
})
export class MyBarChartComponent implements OnInit {

  constructor( public _service:UserService) { }
  public barChartOptions = {
    scaleShowVerticalLines: true,
    responsive: true,
    scales:{
      xAxes: [{
        stacked: true
      }]
    }
  };
  public barChartLabels =[];
  public barChartType = 'bar';
  public barChartLegend = [];
  public barChartData = [
    {data: [ ], label: 'GDP2'},
    {data: [ ], label: 'GDP'},
    {data: [ ], label: 'GDP1'},
    
    
  ];
  public Chartdata = [];
  ngOnInit() {
      this.Chartdata = this._service.getData();

    for (var key in this.Chartdata) { 
      this.barChartLabels.push(key);
      for (var key1 in this.Chartdata[key]) {
        this.barChartData[2].data.push(this.Chartdata[key][key1].gdp );
        this.barChartData[1].data.push(this.Chartdata[key][key1].gdp1);
        this.barChartData[0].data.push(this.Chartdata[key][key1].gdp2);
      }
    }
    
      
    }
}



