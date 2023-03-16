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
  addCountry = (country: any) => {
    const id = Math.max(...this.countries.map(c => c.id)) + 1;
    let data = {
      id:id,
      libelle:country
    }
    this.countries.push(data);
    return country;
  }
}
