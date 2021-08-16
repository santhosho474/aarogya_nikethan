import { Component, OnInit } from '@angular/core';
import { Hospital } from 'src/app/interfaces/hospital';
import { HospitalService } from 'src/app/services/hospital.service';

@Component({
  selector: 'app-findhospital',
  templateUrl: './findhospital.component.html',
  styleUrls: ['./findhospital.component.css'],
  providers:[
    HospitalService
  ]
})
export class FindhospitalComponent implements OnInit {
  city:string="";
  hospitals:Array<Hospital>=new Array<Hospital>();
  constructor(private hospitalServices:HospitalService) { }

  ngOnInit(): void {
  }
  getHospitals():void{
    console.log(this.city);
    this.hospitalServices.getHospitalByCity(this.city).subscribe((hospiatlList)=>this.hospitals=hospiatlList);
  }
}
