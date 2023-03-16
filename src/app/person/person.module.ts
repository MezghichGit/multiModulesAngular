import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { PersonComponent } from './person/person.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { ListPersonComponent } from './list-person/list-person.component';


@NgModule({
  declarations: [
    PersonComponent,
    AddPersonComponent,
    ListPersonComponent
  ],
  imports: [
    CommonModule,
    PersonRoutingModule
  ]
})
export class PersonModule { }
