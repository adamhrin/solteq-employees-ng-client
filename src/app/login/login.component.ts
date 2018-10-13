import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { ObservableService } from '../observable-service.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isWrongLoginData: boolean = false;
  user: User = new User();

  constructor(private data: DataService, 
              private router: Router,
              private observableService: ObservableService) { }

  ngOnInit() {
    // in case user enters here through url and he is logged in
    this.data.logout();
    this.observableService.broadcastLogin("false");
  }

  /**
   * Login clicked
   */
  onSubmit() {
    this.data.login(this.user).subscribe(
      (result) => {
        // logged in successfully
        if (result) {
          this.isWrongLoginData = false;
          this.router.navigate(['/']);
          this.observableService.broadcastLogin("true");
        } else {
          this.isWrongLoginData = true;
        }
      },
      () => console.log("Failed to login")
    );
  }

}
