import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
@Input() tableRowData:any;
@Input() tableColumnDefs:any;
  constructor() { }

  ngOnInit() {
    console.log(this.tableRowData);
  }

}
