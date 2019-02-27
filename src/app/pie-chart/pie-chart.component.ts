import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html'  
})
export class PieChartComponent implements OnInit {
  @Input() chartOptions: any;
  @Input() chartLables: any;
  @Input() chartColor: any;
  @Input() chartData: any;
  constructor() {}
  ngOnInit() {
 
  }
  
  


}
