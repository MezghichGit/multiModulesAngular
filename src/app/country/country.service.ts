import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  countries=[
    {
      'id':1,
      'libelle':'France'
    },
    {
      'id':2,
      'libelle':'Italy'
    },
    {
      'id':3,
      'libelle':'Espagne'
    }
  ]
  constructor() { }

  getCountries(){
    return this.countries
  }
}
