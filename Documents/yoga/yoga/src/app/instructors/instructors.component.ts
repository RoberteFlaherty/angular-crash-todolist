import { Component, OnInit } from '@angular/core';
import { Instructor } from '../instructor';
import { InstructorService } from '../instructor.service';
import {ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.css']
})
export class InstructorsComponent implements OnInit {


instructors : Instructor[];
  tempInstructor: Instructor;
  firstName: string;
  lastName: string;





  constructor(private instructorService: InstructorService,
                private ref: ChangeDetectorRef) {
    this.firstName = "";
    this.lastName = "";

  }

  ngOnInit(): void {
    this.getInstructors();
    //this.getInstructors();
  }


  add(): void {

    this.firstName = this.firstName.trim();
    this.lastName = this.lastName.trim();

    console.log(this.firstName);
    console.log(this.lastName);
    if(!this.firstName) { return;}
    // this.tempInstructor : Instructor = new Instructor();
    // tempInstructor  = {id: 0, firstName: "a", lastName: "a"};
    // this.tempInstructor.firstName = firstName;
    // this.tempInstructor.lastName = lastName;
    this.instructorService.addInstructor({ firstName: this.firstName, lastName: this.lastName } as Instructor).subscribe(instructor => {
      this.instructors.push(instructor); });
    this.firstName = "";
    this.lastName = "";


  }

  getInstructors():void {
    this.instructorService.getInstructors()
    .subscribe(instructors => this.instructors = instructors);
  }

  delete (instructor: Instructor): void {
    console.log(`instructor id is: ${instructor.id}` );
    this.instructors.filter(h => h !== instructor);
    this.instructorService.deleteInstructor(instructor).subscribe();
     this.ref.detectChanges();
     this.ngOnInit();
  }
}
