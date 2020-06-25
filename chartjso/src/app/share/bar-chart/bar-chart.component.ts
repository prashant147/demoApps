import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';
import {  ChartOptions } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  
  @Input("headerTitle") headerTitle:string ; 
  @Input("barChartLabels") barChartLabels:any ; 
  @Input("barChartData") barChartData:any = null ; 
  @Input("chartType") chartType:string ; 
  @Output("selectItems") clickEvent:EventEmitter<any> = new EventEmitter<any>(); 
  @Input("chatData") chatData:any = null; 

  selectItems:string = null;

  public barChartOptions = {
    scaleShowVerticalLines: true,
    responsive: true,
    scales:{
      xAxes: [{
        stacked: true
      }]
    }
  };

  public barChartLegend = [];
  constructor() { }
  chartClick(e){
    var obj = this;
   /* var cd = this.barChartData.filter(function(ev){
      if(ev.country == obj.barChartData[e.active[0]._index]){ return true;}
    });*/
  }
  ngOnInit() {
    console.log(this.chatData);
  }
  
}
