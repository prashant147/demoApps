import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-bar-chartlessdata',
  templateUrl: './my-bar-chartlessdata.component.html',
  styleUrls: ['./my-bar-chartlessdata.component.scss']
})
export class MyBarChartlessdataComponent implements OnInit {
  public pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public pieChartData = [120, 150, 180, 90];
  public pieChartType = 'pie';
  constructor() { }

  ngOnInit() {
  }

}
