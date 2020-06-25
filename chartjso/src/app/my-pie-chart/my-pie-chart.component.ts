import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-my-pie-chart',
  templateUrl: './my-pie-chart.component.html',
  styleUrls: ['./my-pie-chart.component.scss']
})
export class MyPieChartComponent implements OnInit {

  public Chartdata = [];
  public pieChartLabels = [];
  public pieChartData = [  ];
  public pieChartType = 'pie';
  public isRootApp:boolean = false;
  
  public pieChartOptions: ChartOptions = {
    rotation:10,
    responsive: true,
    animation:{
      animateScale:true
    },
    legend: {
      position: 'top',
    }
  };

  constructor(public _service:UserService) { }

  ngOnInit() {
    this.Chartdata = this._service.getData();

    for (var key in this.Chartdata) { 
      this.pieChartLabels.push(key);
      for (var key1 in this.Chartdata[key]) {
        console.log(this.Chartdata[key][key1].gdp2);
           this.pieChartData.push(this.Chartdata[key][key1].gdp2);
      }
    }
  }
  ngAfterViewInit() {
    
  }
  /*
  getChartEvent(e){
    console.log(e);
    var obj = this;
    var d =  obj.getPieData();
    var cd = d.filter(function(ev){
      if(ev.brand == obj.pieChartLabels[e.active[0]._index]){ return ev.Chile;}
    });
    obj.pieChartLabels = [];
    obj.pieChartData = [];
    for(var i = 0;i<cd[0].Chile.length ; i++){
      obj.pieChartLabels.push(cd[0].Chile[i].brand);
      obj.pieChartData.push(cd[0].Chile[i].sales);
    }
    obj.isRootApp = true;
    //e.event.animation();
  }
  getBackRoot(){ 
    var obj = this;
    obj.isRootApp = false;
    var d =  obj.getPieData();
    obj.pieChartLabels = [];
    obj.pieChartData = [];
    for(var i = 0;i<d.length ; i++){
      obj.pieChartLabels.push(d[i].brand);
      obj.pieChartData.push(d[i].sales);
    }
  }*/
}


