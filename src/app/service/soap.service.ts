import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SoapService {

  //private soapUrl = environment.apiUrl + 'axio-securite-web/service/securite/authentificationServices';
  // private soapUrl = environment.apiUrl + 'axio-securite-web/actions/authentification/submitAuthentificationForm';
  private soapUrl = environment.apiUrl + 'axio-securite-web/actions/authentification/brp/authenticate';

  private existError = false;
  private isLoggedIn: any = 0;
  private token!:string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  htmlResponse: string = '';
  receivedCookies: string[] = [];
  axioHabilitations =  '';
  axioUtilisateur ='';
  jSessionID = '';
  ;

  constructor(private http: HttpClient, public router: Router, public cookieService: CookieService) { }

  public authentifierUtilisateur(loginFormModel:any): void {
    const params = {
      identifiant: 'system',
      motPasse: 'Opti6Admin'
    };

    const urlWithParams = `${this.soapUrl}?identifiant=${params.identifiant}&motPasse=${params.motPasse}`;

    this.http.get<any>(urlWithParams, { observe: 'response', withCredentials: true}).subscribe(response => {

      console.log(response.headers);

      // this.axioHabilitations = (<any>response).axioHabilitations;
      // this.axioUtilisateur = (<any>response).axioUtilisateur.value;
      // this.jSessionID = (<any>response).jSessionID.value;

      // console.log(this.axioHabilitations);
      

      // this.cookieService.set("AxioHabilitations", this.axioHabilitations);
      // this.cookieService.set("AxioUtilisateur", this.axioUtilisateur);
      // this.cookieService.set("JSESSIONID", this.jSessionID);
  
      this.navigateToStart();
    }, error => {
      console.error('Error:', error);
    });

    console.log(this.cookieService.getAll());
    this.accessCookies();
  }

  
  accessCookies() {
    const cookies = document.cookie;
    console.log('All Cookies:', cookies);
    
    if (cookies) {
      const cookieArray = cookies.split(';');
      cookieArray.forEach(cookie => {
        const [name, value] = cookie.split('=');
        if (name && value) {
          console.log('Cookie:', name.trim(), 'Value:', value.trim());
        } else {
          console.error('Invalid cookie:', cookie);
        }
      });
    } else {
      console.error('No cookies found.');
    }
  }
  

  navigateToStart() {
    this.router.navigateByUrl('/start');
  }

  login(): void {
    this.isLoggedIn = true;
  }

  logOut(): void {
      this.isLoggedIn = false;
  }

  isLogIn(): boolean{
    return this.isLoggedIn;
  }
}
