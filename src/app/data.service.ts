import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';



@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>(['First Life goal','Second life goal','Climbing a mountain']);
  goal = this.goals.asObservable();
  constructor() { }

  changeGoal(goal){
    this.goals.next(goal);
  }

}
