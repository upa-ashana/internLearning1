import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { PaginationService } from './pagination.service';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  data: any [];
  // totalRecords:number;
  // totalRecordPerPage=10;  

  // pager object
  pager: any = {};
  // paged items
  pagedItems: any[];

  constructor(private http: Http, private pagerService: PaginationService) { }

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
   
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.data.length, page);

    // get current page of items
    this.pagedItems = this.data.slice(this.pager.startIndex, this.pager.endIndex + 1);
}

}
