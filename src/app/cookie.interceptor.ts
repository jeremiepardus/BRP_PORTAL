import { HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SoapService } from './service/soap.service';


@Injectable()
export class cookieInterceptor implements HttpInterceptor {
  constructor(private soapService: SoapService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<any> {

    const newHeaders = new HttpHeaders({
      "Content-Type":"*",
      "Accept":'*/*',
      //"cookie":"AxioHabilitations=92JGfYuQGRfVUJuWCkp6Y9mJ+aZZnEL2yMyMSrBqLZklrwS4Z2ef32Y1vzWVfoYBy4BRAAgYXJ7rryZGm4d9cFQUrSAOnZ7v+dc5PIqGYk/cxBgmCHvdEzR+WZGH9tHQul0WzkcF5I/RWNe55o8XiHd27lPPGdepNg+tY7pYjzTMMP6PHg8PGEEdgSR/UZ8sW6Dclpq+pM+nPhXoGmiQDnWJYTosTWKJ1u7VQ01VPK8H0X1oBrf3HluOjLXz8NdhTdaHFJhJIjyKXD2lvc0cKUVkZchESzrhelshxoMoGMGL7KbXgt5PdVsEFRThdp1yOsfL5mRmENk08CY/6D0ov4HIfbPINZQ4qcCciiyo2U12+EdfDDazBQ6IylhDtHyKdoGQ5oxKHNalmETMH3ObZ54rkz6BPwTULQ/Pu9V6RIu4vf4hEkzMo5kj4wMIEDw91ct3nK4dJnJI/3fXgNsovNAFlljuyHbDX/TZqiGzErC7KR6Sj+eUKcONDJWeWe+mWIVmDC7jh/3gZ+CURY4zUWuKFsLgCxQejv70RE2hrMn5BALGSr7ydJ1k508TPTnVx1EYhl+SHjNw5rr5UijOPkOjfOwhLP3cI479KwjQH6646S4WfKC6fXlAvzczTTnTYHEXg5AwjXgheQ1m6D5vmRhIgLEIoUx0Y0Yg1pDxv7f8qIL7amwgmEYJzO362q3uEq3Td/DJdHU2hYrioBtiENOmq0ophsTyJ9hOQh/swISbmhcat/EqPuQK2j7+socm/DBapUDrR6oh9kqynKERsPa6tiUv6ZIQuNUM8QCJVSgxjQCZLAA/kZFbySUnBDJUcVq8PGmSu0kF/+Gl5yTBZc7t3z4ZEuEcTfZlyTnXAATYjxuy98nNxGGJXyspdPnVM3WrcpCtjlrliFoXCA2HlLeOPL4x8qWwdffDZtajYo5K7mjcU0rpCZctfa3c8lVesorGkOlOmwrI6ScKR3v5GRQKBPtrqkxysyWztrkHOD9YWutvTfEg8GTu5EFA7VtUvTHLM5za56XABL2r6nU7DdvlNrFe7ldlI0sxtq6lgBQ5/rNPnjb94N0J4uFn6SdXSM+EESUMNHSd5oUzThe6AHEsv53f5hhdrgld8mpqPcjRuC+ZKbX8VKL4l751ZWgl7gQyb/Ypm6DhS+CXaB89xxHxnAsS7SOJYhpeD7I/UI6Glmfv8Rn5QlXu2C+NDZ3YE3t/elW25DqwOCh2Pnxs7/ZSrWapnHa+XTpNq9J19NuZdTLsJPZ6usD8;AxioUtilisateur=92JGfYuQGWzVUJuWCkp6Y9mJ+aZZnEL2yMyMSrBqLZklrwS4Z2ef32Y1vzWVfoYBy4BRAAgYXJ7/rjtCl5pobVcIvEF69PGB+dc4PoqMLk7Rp3QObSHKFTxyf4Sa/83Rrylh918QkvyyXteh4I8onWt4r2eAML7SNFqXCsNehTzHKuO5BQERCUJplkENaZ86dIPdkoKui93GUQq3PRzEEnKKZxJVM36N2avWXwRdJrINzWB8Kq2UIXb29bL2+80hQMHbBoNSTEmqQDql2K8kQwQmM9ZTXjK4MD591twCLa7V7KGAk49KfVtdU1eFO6oQQw==;"
       });

       let axioHab = this.soapService.cookieService.get("AxioHabilitations");
       console.log(axioHab);
       
    // Clone the request and set withCredentials to true
    const modifiedRequest = request.clone({  headers : newHeaders});

    console.log(modifiedRequest);    

    // Pass the modified request to the next handler
    return next.handle(modifiedRequest);
  }
}
