import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent {
  constructor(private countryService:CountryService,private router: Router){}
  handleAddCountry(countryForm:any) {
    this.countryService.addCountry(countryForm.value.wording);
    this.router.navigate(['/country/list']);
  }
}
