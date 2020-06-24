import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-my-pie-chart',
  templateUrl: './my-pie-chart.component.html',
  styleUrls: ['./my-pie-chart.component.scss']
})
export class MyPieChartComponent implements OnInit {

 
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

  constructor() { }

  ngOnInit() {
  }
  public pieChartLabels = ['Samsung', 'Apple', 'Huawei', 'OPPO', 'Vivo', 'Others'];
  public pieChartData = [ 215, 160, 112, 100 , 638,321 ];
  public pieChartType = 'pie';
  public isRootApp:boolean = false;
  ngAfterViewInit() {
    
  }
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
  }
  getPieData() {
    return [
        { brand: 'Samsung', sales: 321
            ,Chile:[
                { brand: 'A1', sales: 321},
                { brand: 'A2', sales: 100},
                { brand: 'A3', sales: 500},
                { brand: 'A4', sales: 300}
            ] },
        { brand: 'Apple', sales: 215,Chile:[
            { brand: 'A5', sales: 321},
            { brand: 'A6', sales: 100},
            { brand: 'A7', sales: 500},
            { brand: 'A8', sales: 300}
        ] },
        { brand: 'Huawei', sales: 160,Chile:[
            { brand: 'A9', sales: 321},
            { brand: 'A10', sales: 100},
            { brand: 'A11', sales: 500},
            { brand: 'A12', sales: 300}
        ] },
        { brand: 'OPPO', sales: 112,Chile:[
            { brand: 'A11', sales: 321},
            { brand: 'A12', sales: 100},
            { brand: 'A13', sales: 500},
            { brand: 'A14', sales: 300}
        ] },
        { brand: 'Vivo', sales: 100,Chile:[
            { brand: 'A21', sales: 321},
            { brand: 'A22', sales: 100},
            { brand: 'A23', sales: 500},
            { brand: 'A24', sales: 300}
        ] },
        { brand: 'Others', sales: 638,Chile:[
            { brand: 'A31', sales: 321},
            { brand: 'A32', sales: 100},
            { brand: 'A33', sales: 500},
            { brand: 'A34', sales: 300}
        ] }
    ];
  }
}


