import { Component } from '@angular/core';
import { CountryService } from './country/country.service';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = null;
  title = 'demoMultiModules';
   constructor(
    private serviceCountry:CountryService
   ){}
  login(){
      this.serviceCountry.getToken().subscribe(
        (data:any) => {
          console.log(data)
          let token = data['token'];
          sessionStorage.setItem("token",token);
          data = jwt_decode(token);
          console.log(data);
          this.username = data["name"];
        }
      );
  }
}
