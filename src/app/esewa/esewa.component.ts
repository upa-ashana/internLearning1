import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ZoneModel} from './zone-model';
import {DistrictModel} from './district-model';
import {VdcModel} from './vdc-model';
@Component({
  selector: 'app-esewa',
  templateUrl: './esewa.component.html',
  styleUrls: ['./esewa.component.css']
})
export class EsewaComponent implements OnInit {
  imageUrl :string="../../assets/img/duck.jpg";
  fileToUpload :File=null;
  constructor(private modalService: NgbModal) { } //private modalService: NgbModal
 
  ngOnInit() {
  }

//occupation dropdown
  occupation=['Student', 'Junior Developer', 'Senior Developer', 'Professor'];  
  
 //permanent zone dropdown
  permanentZone: ZoneModel[]=[
    {zoneId:1, zoneName: 'Rapti'},
    {zoneId:2, zoneName: 'Bagmati'}
  ];

  permanentDistrict: DistrictModel[]=[
    {districtId:1, zoneId:1, districtName:'Dang'},
    {districtId:2, zoneId:1, districtName:'Pyuthan'},
    {districtId:3, zoneId:2, districtName:'Kathmandu'},
    {districtId:4, zoneId:2, districtName:'Bhaktapur'},
    {districtId:5, zoneId:2, districtName:'Lalitpur'}
  ];

  permanentVdc: VdcModel[]=[
    {vdcId:1, districtId:1, vdcName:'Rapti Gaupalika'},
    {vdcId:2, districtId:1, vdcName:'lamahi Nagarpalika'},
    {vdcId:3, districtId:3, vdcName:'Kirtipur Nagarpalika'},
    {vdcId:4, districtId:3, vdcName:'chobar Nagarpalika'}
  ];



//   permanentZone=['Bagmati', 'Bheri', 'Lumbini', 'Rapti', 'Janakpur']; 
// //permanent District dropdown
//   permanentDistrict=['Dang', 'pyuthan', 'Arghakhachi', 'Salyan', 'Rukum',
//  'Rolpa', 'Kathmandu', 'Lalitpur', 'Bhaktapur']; 
// //permanent VDC dropdown
//   permanentVdc=['Rapti Gaupalika', 'Lamahi Nagarpalika', 'Kritipur Naharpalika',
//    'Chobar Nagarpalika', 'Lanichowr Nagarpalika']; 
 
//temporary zone dropdown
temporaryZone=['Bagmati', 'Bheri', 'Lumbini', 'Rapti', 'Janakpur']; 
//permanent zone dropdown
temporaryDistrict=['Dang', 'pyuthan', 'Arghakhachi', 'Salyan', 'Rukum',
 'Rolpa', 'Kathmandu', 'Lalitpur', 'Bhaktapur']; 
//permanent zone dropdown
temporaryVdc=['Rapti Gaupalika', 'Lamahi Nagarpalika', 'Kritipur Naharpalika', 
'Chobar Nagarpalika', 'Lanichowr Nagarpalika']; 


// for model popup
  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }
  
  freeRegister(userForm){
    console.log(userForm.value);
    
}

handleFile(file:FileList){
  this.fileToUpload=file.item(0);
  //show iamge preview
  var reader=new FileReader();
  reader.onload=(event:any)=>{
    this.imageUrl=event.target.result;
  }
  reader.readAsDataURL(this.fileToUpload);
}
  }

  
