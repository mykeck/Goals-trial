import { Injectable } from '@angular/core';
import { Goal } from '../goal'
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GoalService {
   goals: Goal[]=[new Goal(1,'kefa','my name',new Date())];
  getGoals(){
    return  this.goals;
  }

  constructor() { }
}
