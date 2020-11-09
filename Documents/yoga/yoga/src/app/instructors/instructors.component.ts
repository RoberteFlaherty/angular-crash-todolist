import { Component, OnInit } from '@angular/core';
import { Instructor } from '../instructor';
import { INSTRUCTORS } from '../mock-instructors';


@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.css']
})
export class InstructorsComponent implements OnInit {


instructors = INSTRUCTORS;
selectedInstructor: Instructor;
onSelect(instructor: Instructor): void
{
  this.selectedInstructor = instructor;
}


  constructor() { }

  ngOnInit(): void {
  }

}
