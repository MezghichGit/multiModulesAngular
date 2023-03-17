import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CountryService {
baseUrl:string ="http://127.0.0.1:83/countries";
  constructor(private http:HttpClient) { }

  getAllCountries(){
    console.log("Ok");
    return this.http.get(this.baseUrl);
  }

  addCountry(country:any){
    return this.http.post(this.baseUrl,country);
  }
/*
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
  ]*/

/*
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
  }*/
}
