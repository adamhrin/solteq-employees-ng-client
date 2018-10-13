import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {
  //Observable item sources
  private subject = new BehaviorSubject<any>(0);
  private subjectLogin = new BehaviorSubject<any>(0);

  //Observable item streams
  subjectToBroadcast$ = this.subject.asObservable();
  subjectToBroadcastLogin$ = this.subjectLogin.asObservable();

  //service methods
  broadcast(data) {
    this.subject.next(data);
  }
  
  broadcastLogin(data) {
    this.subjectLogin.next(data);
  }
}
