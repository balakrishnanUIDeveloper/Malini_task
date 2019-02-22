import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts'
import { HttpClientModule } from '@angular/common/http';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { ChartService } from "./service/chart.service";
import { AgGridModule } from 'ag-grid-angular';
import { TableComponent } from './table/table.component';
@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    AgGridModule.withComponents([TableComponent])
  ],
  providers: [ChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
