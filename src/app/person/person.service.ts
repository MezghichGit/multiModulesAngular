import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  persons=[
    {
      'id':1,
      'name':'Amine'
    },
    {
      'id':2,
      'name':'Damien'
    },
    {
      'id':3,
      'name':'Adrien'
    }
  ]
  constructor() { }

  getPersons(){
    return this.persons
  }
}
