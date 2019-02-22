import { Component, OnInit } from '@angular/core';
import { ChartService } from "./service/chart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PieChart';
  public datas: any;
  public chartLables: any[] = [];
  public chartDataArr: any[] = [];
  public chartData: any[] = [{ data: [] }];
  
  // ADD CHART OPTIONS. 
  public chartOptions = {
    responsive: true
  }
  public chartColor: any = [
    {
      backgroundColor: ['rgba(30, 169, 224, 0.8)',
        'rgba(255,165,0,0.9)',
        'rgba(139, 136, 136, 0.9)',
        'rgba(255, 161, 181, 0.9)',
        'rgba(255, 102, 0, 0.9)'
      ]
    }
  ];
  public columnDefs = [
    {headerName: 'Id', field: 'id', sortable: true},
    {headerName: 'Units', field: 'units', sortable: true},
    {headerName: 'Type', field: 'type', sortable: true}
];
  public rowData:any;
  constructor(private chartService: ChartService) { }
  ngOnInit() {
    this.chartService.getChartData().subscribe(res => {
      this.datas = res;
      let rowDataArr = [];
      for (let i = 0; i < this.datas.length; i++) {
        if (this.datas[i]['units'] && this.chartDataArr.indexOf(this.datas[i]['units']) == -1) {
          this.chartLables.push(this.datas[i].id);
          this.chartDataArr.push(this.datas[i].units);
          this.chartData = this.chartDataArr;
        }
        rowDataArr.push(this.datas[i]);
      }
      this.rowData =rowDataArr;
    });
  }

 




}