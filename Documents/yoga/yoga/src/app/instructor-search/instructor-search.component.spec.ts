import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorSearchComponent } from './instructor-search.component';

describe('InstructorSearchComponent', () => {
  let component: InstructorSearchComponent;
  let fixture: ComponentFixture<InstructorSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
