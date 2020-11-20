import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Instructor } from './instructor';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {


    createDb() {
      const instructors = [
        {id: 1, firstName: "Marissa", lastName: "Ramos"},
        {id: 2, firstName: "Tammy", lastName: "joe"},
        {id:3, firstName: "Ashley", lastName: "Threiser"}
      ];
      return {instructors};
    }

    genId(instructors: Instructor[]): number {
      return instructors.length > 0 ? Math.max(...instructors.map(instructor => instructor.id)) + 1 : 3;
    }

  }
