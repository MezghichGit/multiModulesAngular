import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CountryRoutingModule } from './country-routing.module';
import { CountryComponent } from './country/country.component';
import { AddCountryComponent } from './add-country/add-country.component';
import { ListCountryComponent } from './list-country/list-country.component';
import { BgCountryDirective } from './bg-country.directive';


@NgModule({
  declarations: [
    CountryComponent,
    AddCountryComponent,
    ListCountryComponent,
    BgCountryDirective
  ],
  imports: [
    CommonModule,
    CountryRoutingModule,
    FormsModule,
  ]
})
export class CountryModule { }
