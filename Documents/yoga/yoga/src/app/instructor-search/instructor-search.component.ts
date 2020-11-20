import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Instructor } from '../instructor';
import { InstructorService } from '../instructor.service';

@Component({
  selector: 'app-instructor-search',
  templateUrl: './instructor-search.component.html',
  styleUrls: ['./instructor-search.component.css']
})
export class InstructorSearchComponent implements OnInit {
  instructors$: Observable<Instructor[]>;
  private searchTerms = new Subject<string>();

  constructor(private instructorService: InstructorService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.instructors$ = this.searchTerms.pipe(debounceTime(300),
    distinctUntilChanged(),
      switchMap((term: string) =>
      this.instructorService.searchInstructors(term)),
    );
  }

}
