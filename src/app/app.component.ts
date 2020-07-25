import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-root',
  preserveWhitespaces: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'varnaTravelGuideFE';
  isAuthenticated: boolean;
  apiEndPoint:string="";
  
  constructor(public oktaAuth: OktaAuthService) {
  }

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );

    this.apiEndPoint = environment.apiKey;
  }

  login() {
    this.oktaAuth.loginRedirect('/profile');
  }

  logout() {
    this.oktaAuth.logout('/');
  } 
}
