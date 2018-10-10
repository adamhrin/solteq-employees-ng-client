import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {
  //Observable item source
  private subject = new BehaviorSubject<any>(0);
  //Observable item stream
  subjectToBroadcast$ = this.subject.asObservable();
  //service method
  broadcast(data) {
    this.subject.next(data);
  }
}
