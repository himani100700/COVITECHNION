import { Component, OnInit } from '@angular/core';
import { CoviguardService } from "../coviguard.service";


@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {

  
covidata: Array<any>;
totalRecords: string;
page: number=1;
constructor( private service: CoviguardService) {
  this.covidata = new Array<any>()
 }
  ngOnInit(): void {
    this.service.covidData().subscribe(
      (data)=>{
        this.covidata=data;
        this.totalRecords= data.length
        console.warn(data)
      }
    )
  }

}
