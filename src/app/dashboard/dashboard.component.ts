import { Component, OnInit } from '@angular/core';

import { name } from "../Data/dataType";
import { NameService } from "../name.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  show : string = '';
  delShow : string = '';
  searchShow : string = '';
  addValue : name[] = [];
  getFiveValue:name[] = [];
  result:any;

  getEmployee(){
    this.nameServices.getDetails().subscribe(getFive => this.getFiveValue = getFive.slice(0,5));
  }

  constructor(private nameServices : NameService) { }

  ngOnInit(): void {
    this.getEmployee();
  }

  add(names:string, phn:string){

    const newPerson: name = new name();
    newPerson.name = names;
    newPerson.phn = Number(phn);
    this.nameServices.addData(newPerson).subscribe(_ => 
      {this.show = ''
      this.getFiveValue.push(_)});
  }

  delete(id:any){
    this.nameServices.delete(Number(id)).subscribe(del => {
      this.delShow = '';
      this.getFiveValue = this.getFiveValue.filter(eachName => eachName.id !== id);
    })
  }

  searchValue(Name : string){
    this.nameServices.searchEmployee(Name).subscribe(result => this.result = result);
  }

}
