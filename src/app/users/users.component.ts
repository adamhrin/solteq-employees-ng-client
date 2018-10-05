import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
  // ,
  // animations: [
  //   trigger('listStagger', [
  //     // from any state to and any state back and forth
  //     transition('* <=> *', [
  //       query(':enter', 
  //       [
  //         style({ opacity: 0, tranform: 'translateY(-15px)' }),
  //         stagger('50ms', 
  //           animate('550ms ease-out',
  //             style({ opacity: 1, transform: 'translateY(0px)'})))
  //       ], { optional: true }),
  //       query(':leave', animate('50ms', style({ opacity: 0 })), {
  //         optional: true
  //       })
  //     ])
  //   ])
  // ]
})
export class UsersComponent implements OnInit {

  // $ is convention for async object instances
  employees$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getEmployees().subscribe(
      data => this.employees$ = data
    );
  }

}
