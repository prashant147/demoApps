import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { ChartsModule } from 'ng2-charts';
import { MyDoughnutChartComponent } from './my-doughnut-chart/my-doughnut-chart.component';
import { MyRadarChartComponent } from './my-radar-chart/my-radar-chart.component';
import { MyPieChartComponent } from './my-pie-chart/my-pie-chart.component';
import { MyBarChartlessdataComponent } from './my-bar-chartlessdata/my-bar-chartlessdata.component';
import { UserService } from './service/user.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MyBarChartComponent,
    MyDoughnutChartComponent,
    MyRadarChartComponent,
    MyPieChartComponent,
    MyBarChartlessdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
