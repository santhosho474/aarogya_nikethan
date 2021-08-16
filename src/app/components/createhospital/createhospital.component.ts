import { Component, OnInit } from '@angular/core';
import { Hospital } from 'src/app/interfaces/hospital';
import { HospitalService } from 'src/app/services/hospital.service';

@Component({
  selector: 'app-createhospital',
  templateUrl: './createhospital.component.html',
  styleUrls: ['./createhospital.component.css'],
  providers:[
    HospitalService
  ]
})
export class CreatehospitalComponent implements OnInit {

  hospital:Hospital={
    hospitalname:'',
    password:'',
    address:{
      street:'',
      area:'',
      city:'',
      distrit:'',
      state:''
    },
    faclites:{
      beds:0,
      ventilation:0,
      criticalCareUnit:0,
      isolationWard:0,
    }
};
  constructor(private hospitalService:HospitalService) { }

  ngOnInit(): void {
    
  }
  addHospital(){
    console.log(this.hospital);
    this.hospitalService.postHospital(this.hospital).subscribe((dbhospital)=>console.log(dbhospital)
    )
  }
}
