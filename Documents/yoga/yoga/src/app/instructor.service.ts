import { Injectable } from '@angular/core';
import { Instructor } from './instructor'
import { INSTRUCTORS } from './mock-instructors';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  private instructorsUrl = "api/instructors";
  httpOptions = { headers: new HttpHeaders({ "content-type": "application/jspn"})};


  constructor(private messageService : MessageService, private http: HttpClient) { }

  private log(message: string)
  {
    this.messageService.add(`instructorService: ${message}`);
  }

  getInstructors(): Observable<Instructor[]>{
    this.messageService.add("InstructorService: fetched instructorssss");
    return this.http.get<Instructor[]>(this.instructorsUrl).pipe(
      tap(_ => this.log("fetched instructors sir")),
      catchError(this.handleError<Instructor[]>('getInstructors', []))
    );
  }

  private handleError<T>(operation= "operation", result?: T)
  {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

  updateInstructor(instructor: Instructor) : Observable<any> {
    return this.http.put(this.instructorsUrl, instructor, this.httpOptions).pipe(
      tap(_ => this.log(`updated instructor id=${instructor.id}`)),
      catchError(this.handleError<any>("updateInstructor"))
    );
  }

  addInstructor(instructor: Instructor): Observable<Instructor> {
    return this.http.post<Instructor>(this.instructorsUrl, instructor,
      this.httpOptions).pipe(
        tap((newInstructor: Instructor) => this.log(`added instructor w/id=${newInstructor.id}`)),
        catchError(this.handleError<Instructor>("addInstructor"))
      );
  }

  deleteInstructor(instructor: Instructor | number): Observable<Instructor> {
  //  console.log("instructor being deleted");
    const id = typeof instructor === 'number' ? instructor : instructor.id;
    const url = `${this.instructorsUrl}/${id}`;
    console.log(url);
    return this.http.delete<Instructor>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted instructor id = ${id}`)),
      catchError(this.handleError<Instructor>('deleteInstructor'))
    );
  }

    searchInstructors(term: string): Observable<Instructor[]>{
      if(!term.trim()){
        return of ([]);
      }
      return this.http.get<Instructor[]>(`${this.instructorsUrl}/?
          name=${term}`).pipe( tap(x => x.length ?
            this.log(`found instructors matching "${term}"`) :
          this.log(`No instructors matching"${term}""`)),
          catchError(this.handleError<Instructor[]>(`searchInstructors`, []))
        );
    }

  getInstructor(id: number): Observable<Instructor> {
    this.messageService.add(`instructorService fetched instructor id=${id}`);
    const url = `${this.instructorsUrl}/${id}`;
    return this.http.get<Instructor>(url).pipe(
      tap(_ => this.log(`fetched instrucctor id=${id}`)),
      catchError(this.handleError<Instructor>(`getInstructor id=${id}`))
    );
  }
}
