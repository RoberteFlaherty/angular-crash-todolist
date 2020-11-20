import { Component, OnInit } from '@angular/core';
import { Instructor } from '../instructor';
import { InstructorService } from '../instructor.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  instructors: Instructor[] = [];

  constructor(private instructorService: InstructorService) { }


  ngOnInit(): void {
    this.getInstructors();
  }

  getInstructors():void{
    this.instructorService.getInstructors().subscribe(instructors => this.instructors = instructors.slice(1,5));
  }
}
