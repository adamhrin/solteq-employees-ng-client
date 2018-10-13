import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DataService } from '../data.service';
import { ObservableService } from '../observable-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {

  currentUrl: string;
  //for subscribing of observableService
  subscription: Subscription;
  isLoggedIn: boolean;

  constructor(private router: Router, 
              private data: DataService, 
              private observableService: ObservableService) {
    router.events.subscribe(_ => {
      if (_ instanceof NavigationEnd) {
        this.currentUrl = _.url;
      }
    });
  }

  ngOnInit() {
    // show sidebar only if user is logged in
    this.isLoggedIn = !this.data.isTokenExpired();

    // subscribe to observable service 
    this.subscription = this.observableService.subjectToBroadcastLogin$
      .subscribe(newData => {
        // this is called also when this component is created, the value is 0 then
        // => I don’t want to set isLoggedIn
        // hint: normally comes from login component
        if (newData != 0) {
          this.isLoggedIn = newData == "true" ? true : false;
        }
      });
  }

  ngOnDestroy(): void {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }

  logout() {
    if(confirm("Do you want to log out?")) {
      this.data.logout();
      // setting this.isLoggedIn through broadcast service in ngOnit() of login component
      this.router.navigate(['/login']);
    }
    
  }

}