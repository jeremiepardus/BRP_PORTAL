import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../environments/environment';
import { SoapService } from '../../service/soap.service';


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent implements OnInit{

  jnlpUrl = environment.apiUrl + 'axio-deploiement-web/install/launcher.jsp';
  constructor(public soapService: SoapService, public router: Router, private http: HttpClient, private cookieService: CookieService) {  }

  launchJavaWebStart() {

    this.soapService.accessCookies();

    const headers = new HttpHeaders()
    .append('Content-Type', 'text/x-gwt-rpc; charset=UTF-8')
    .append('Accept', '*/*');
    // .append('Cookie', 'AxioUtilisateur="'+this.cookieService.get("AxioUtilisateur")+'";JSESSIONID=' + this.cookieService.get("JSESSIONID"));

    // console.log(this.cookieService.get("AxioUtilisateur"));
    
    this.http.get<any>(this.jnlpUrl).subscribe(
      response =>  console.log(response),
      error => console.log(error)
    )
    window.open(this.jnlpUrl, '_blank');
  }

  ngOnInit() {
 
    // const axioHabilitations = localStorage.getItem("AxioHabilitations");
    // const axioUtilisateur = localStorage.getItem("AxioUtilisateur");
    // const JSESSIONID = localStorage.getItem("JSESSIONID");
    
    // const headers = new HttpHeaders()
    // .append('Content-Type', 'text/x-gwt-rpc; charset=UTF-8')
    // .append('Accept', '*/*')
    // .append('Cookie', 'AxioHabilitations='+axioHabilitations+'AxioUtilisateur='+axioUtilisateur);

    // this.http.get<any>(this.jnlpUrl, {headers : headers}).subscribe(
    //   res => console.log(res),
    //   error => console.log(error)
      
    // )
  }
}
