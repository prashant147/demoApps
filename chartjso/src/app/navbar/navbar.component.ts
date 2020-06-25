import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { ChartType, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public Chartdata=[];
  public barChartLabels = [];
  public barChartData = [
    {data: [], label: 'GDP'},
    {data: [], label: 'GDP 1'},
    {data: [], label: 'GDP 2'}];
  public lineChartData = [ {data: [], label: 'GDP'}];

  //public pieChartLabels  = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
  public pieChartData: number[] = [];  
  public pieChartLabels: any =[]
 

  constructor(public _service:UserService) { }

  ngOnInit() {
    this.Chartdata = this._service.getData();
    this.pieChartLabels = [];
    this.pieChartData = [];
    for (var key in this.Chartdata) { 
      this.barChartLabels.push(key); 
      if(this.pieChartLabels.length < 10){
        this.pieChartLabels.push([key]); 
      }
      
      for (var key1 in this.Chartdata[key]) {
        this.barChartData[2].data.push(this.Chartdata[key][key1].gdp );
        this.barChartData[1].data.push(this.Chartdata[key][key1].gdp1);
        this.barChartData[0].data.push(this.Chartdata[key][key1].gdp2);
        this.lineChartData[0].data.push(this.Chartdata[key][key1].gdp2);
        if(this.pieChartData.length < 10){
         this.pieChartData.push(this.Chartdata[key][key1].year);
        }
      }
    }
  }
  selectBarItems(e){

  }
  selectLineItems(e){

  }
  selectPeiItems(e){

  }
}
