import { Component, OnInit, Input } from '@angular/core';
import { Instructor } from '../instructor';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { InstructorService } from '../instructor.service';

@Component({
  selector: 'app-instructor-detail',
  templateUrl: './instructor-detail.component.html',
  styleUrls: ['./instructor-detail.component.css']
})
export class InstructorDetailComponent implements OnInit {

   instructor: Instructor;

  constructor(private route: ActivatedRoute, private instructorService: InstructorService,
              private location: Location) { }

  ngOnInit(): void {
    this.getInstructor();
  }

  getInstructor(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.instructorService.getInstructor(id).subscribe(instructor => this.instructor = instructor);
  }

    save(): void {
      this.instructorService.updateInstructor(this.instructor)
      .subscribe(() => this.goBack());
    }

    goBack(): void {
      this.location.back();
    }
}
