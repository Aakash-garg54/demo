import { Component, OnInit } from '@angular/core';

import { name } from "../Data/dataType";
import { NameService } from "../name.service";

@Component({
  selector: 'app-employ',
  templateUrl: './employ.component.html',
  styleUrls: ['./employ.component.css']
})
export class EmployComponent implements OnInit {

  constructor(private nameDetails : NameService) { }

  ngOnInit(): void {
    this.getDetails();
  }

  /* det:name; */
  details : name[];

  getDetails(){
    this.nameDetails.getDetails().subscribe(data => this.details = data);
  }

/*   selected (id: name){
    this.det = id;
  }  */

}
