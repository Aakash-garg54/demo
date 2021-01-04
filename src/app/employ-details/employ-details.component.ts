import { Component, OnInit , Input } from '@angular/core';

import { name } from "../Data/dataType";
import { NameService } from "../name.service";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-employ-details',
  templateUrl: './employ-details.component.html',
  styleUrls: ['./employ-details.component.css']
})
export class EmployDetailsComponent implements OnInit {

  @Input() details: name;

  constructor(
    private nameService : NameService,
    private location : Location,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
  this.getDetails();
  }

  getDetails(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.nameService.getDetailbyId(id).subscribe(details => this.details = details);
  }

  save(){
    this.nameService.updateData(this.details).subscribe(_ => this.goBack())
  }

  goBack(){
    this.location.back();
  }

}
