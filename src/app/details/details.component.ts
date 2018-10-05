import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router'
import { Employee } from '../models/employee';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  employee$: Employee = new Employee();
  isEditMode = false;

  constructor(
    private data: DataService, 
    private route: ActivatedRoute) {
      this.route.params.subscribe(params => this.employee$.id = params.id);
  }

  ngOnInit() {
    this.data.getEmployee(this.employee$.id).subscribe(data => this.employee$ = data);
  }

}
