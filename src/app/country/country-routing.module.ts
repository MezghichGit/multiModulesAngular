import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCountryComponent } from './add-country/add-country.component';
import { CountryComponent } from './country/country.component';
import { ListCountryComponent } from './list-country/list-country.component';

const routes: Routes = [
  {
    path: '',
    component: CountryComponent,
    children:[
      {
        path: 'list',
       component: ListCountryComponent,
      },
      {
        path: 'add',
       component: AddCountryComponent,
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
