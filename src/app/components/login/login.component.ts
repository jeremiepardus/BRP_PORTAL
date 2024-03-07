import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SoapService } from '../../service/soap.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginFormModel: any = {
		username: "",
		password: ""
	};

  showDisabledMessage: boolean = false;

  constructor(public soapService: SoapService, public router: Router) {  }

  authenticateUser(): void {
    this.soapService.authentifierUtilisateur(this.loginFormModel);
  }

  authenticateUserOld(): void {
 /*    this.soapService.authentifierUtilisateur(this.loginFormModel).subscribe(response => {
      if(!this.soapService.isErrorExist()){
        console.log(response);

        console.log("200 Ok");
        this.soapService.login();
        this.navigateToStart();
      }else{
        console.log(response);

        console.log("error");
      }
    }); */
  }

  showMessage(event: Event) {
    if ((event.target as HTMLButtonElement).disabled) {
      event.preventDefault();
      this.showDisabledMessage = true;
    }
  }

  hideMessage() {
    this.showDisabledMessage = false;
  }

  navigateToStart() {
    this.router.navigateByUrl('/start');
  }

}
