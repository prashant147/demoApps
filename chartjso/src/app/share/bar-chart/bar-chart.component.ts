import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';
import {  ChartOptions } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  
  public dataList:any = [];

  @Input("headerTitle") headerTitle:string ; 
  @Input("barChartLabels") barChartLabels:any ; 
  @Input("barChartData") barChartData:any = null ; 
  @Input("chartType") chartType:string ; 
  @Output("selectItems") clickEvent:EventEmitter<any> = new EventEmitter<any>(); 

  @Input("chatData")
  set chatData(chatData: any) {
    this._chatData = chatData;
    this.barChartLabels = [];
   
    for(var i=0;i<this._chatData.length;i++){
      this.barChartLabels.push(this._chatData[i].country);
      this.dataList.push(this._chatData[i].gdp);
    } 
  }
 
  @Input("drillDown") drillDown:boolean = false;
  public _chatData:any;
  selectItems:string = null;
  public isRoot:any=[];
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
    if(obj.drillDown){
      if(this._chatData[e.active[0]._index].group){
        this.barChartLabels = [];
        this.dataList = [];
        this.isRoot.push(e.active[0]._index);
        var data = this._chatData[e.active[0]._index].group;
        for(var i=0;i<data.length && i< 10;i++){
          this.barChartLabels.push(data[i].continent);
          this.dataList.push(data[i].gdp);
        }
      }
    }else{
      if(obj.clickEvent){
        obj.clickEvent.emit(e.active[0]._index);
      }
    }
  }
  ngOnInit() {
    
  }
  getBackEvn(){
    if(this.isRoot.length > 1){
      var ind = this.isRoot[this.isRoot.length - 1];
      this.barChartLabels = [];
      this.dataList = [];
      if(this._chatData[ind].group){
        var data = this._chatData[ind].group;
        for(var i=0;i<data.length && i< 10;i++){
          this.barChartLabels.push(data[i].continent);
          this.dataList.push(data[i].gdp);
        }
      }
      this.isRoot.pop();
    }else{
      this.barChartLabels = [];
      this.dataList = [];
      for(var i=0;i<this._chatData.length && i< 10;i++){
        this.barChartLabels.push(this._chatData[i].country);
        this.dataList.push(this._chatData[i].gdp);
      } 
    }
  }
}
