import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as $ from "jquery";
import 'datatables.net';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
   @ViewChild('dataTables') table:ElementRef; //dataTables template reference variables
   dataTables:any;
  constructor() { }

  ngOnInit() {
   this.dataTables =$ (this.table.nativeElement); //converting native element into jquery element
  // this.dataTables.DataTables();
  $(this.dataTables).DataTable();// $ this.dataTables
  console.log(this.dataTables);
  }

}
