import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-angular-table',
  templateUrl: './angular-table.component.html',
  styleUrls: ['./angular-table.component.css']
})
export class AngularTableComponent implements OnInit {
  public data:any; 
  data$ = new Subject<any>();
  search; 
  rows; 
  constructor() { }

  ngOnInit() {
    this.data=[
      {'sno':'1', 'name':'usha chaudhary', 'occupation':'student', 'gender':'female', 'address':'medical chowk, shorahakhutte'},
      {'sno':'2', 'name':'usha chaudhary', 'occupation':'student', 'gender':'female', 'address':'medical chowk, shorahakhutte'},
      {'sno':'3', 'name':'susma chaudhary', 'occupation':'student', 'gender':'female', 'address':'medical chowk, shorahakhutte'},
      {'sno':'4', 'name':'usha chaudhary', 'occupation':'student', 'gender':'female', 'address':'medical chowk, shorahakhutte'},
      {'sno':'5', 'name':'rebuka makaju', 'occupation':'inern student', 'gender':'female', 'address':'bhaktapur'},
      {'sno':'6', 'name':'sita ', 'occupation':'student', 'gender':'female', 'address':'medical chowk'},
      {'sno':'7', 'name':'usha ', 'occupation':'student', 'gender':'female', 'address':'medical chowk'},
      {'sno':'8', 'name':'gita ', 'occupation':'student', 'gender':'female', 'address':'medical chowk'},
      {'sno':'9', 'name':'usha ', 'occupation':'student', 'gender':'female', 'address':'medical chowk, shorahakhutte'},
      {'sno':'10', 'name':'shyam ', 'occupation':'student', 'gender':'female', 'address':'medical chowk, shorahakhutte'},
      {'sno':'11', 'name':'ram ', 'occupation':'student', 'gender':'female', 'address':'medical chowk, shorahakhutte'},
      {'sno':'12', 'name':'usha ', 'occupation':'student', 'gender':'male', 'address':'medical chowk'},
      {'sno':'13', 'name':'KJUY ', 'occupation':'student', 'gender':'female', 'address':'medical chowk, shorahakhutte'},
      {'sno':'14', 'name':'usha ', 'occupation':'student', 'gender':'male', 'address':'medical chowk, shorahakhutte'},
      {'sno':'15', 'name':'usha ', 'occupation':'student', 'gender':'female', 'address':'medical chowk'},
      {'sno':'16', 'name':'ASDF ', 'occupation':'student', 'gender':'male', 'address':'medical chowk, shorahakhutte'},
      {'sno':'17', 'name':'usha ', 'occupation':'student', 'gender':'female', 'address':'medical chowk, shorahakhutte'},
      {'sno':'18', 'name':'XYZ ', 'occupation':'student', 'gender':'female', 'address':'medical chowk, shorahakhutte'},
      {'sno':'19', 'name':'ABC ', 'occupation':'student', 'gender':'female', 'address':'medical chowk, shorahakhutte'},
      {'sno':'20', 'name':'usha ', 'occupation':'student', 'gender':'female', 'address':'medical chowk, shorahakhutte'},
      {'sno':'21', 'name':'radha chaudhary', 'occupation':'officer', 'gender':'female', 'address':'medical chowk, shorahakhutte'}
      
    ]
   
  }// ngOninit
  filter(search) {
    this.data$.next(this.data.filter(_ => _.name.includes(search)));
  } 
  // getting total rows of table 
  get totalRows(): number {
    return this.data.length;
  }
  // get activeRows(): number {
  //   return this.data.filter(i => i.state).length;
  // }
  
  // get inactiveRows(): number {
  //   return this.data.filter(i => !i.state).length;
  // }
}
