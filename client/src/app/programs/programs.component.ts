import { WorkoutsService } from './../workouts.service';
import { Workout } from './../models/workout';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-programs',
    templateUrl: 'programs.component.html',
    styleUrls: ['programs.component.scss']
})
export class ProgramsComponent implements OnInit {

  programs: Workout[];

  constructor(workoutService: WorkoutsService) {
    var program = new Workout()
  }

  ngOnInit() {
  }
}
