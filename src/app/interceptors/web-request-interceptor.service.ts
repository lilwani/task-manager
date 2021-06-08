import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthServiceService } from '../services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class WebRequestInterceptorService implements HttpInterceptor{

  constructor(private authService : AuthServiceService) { }

  intercept(request : HttpRequest<any>, next : HttpHandler){

    request = this.authorization(request)
    return next.handle(request).pipe(
      catchError((err : HttpErrorResponse)=>{
        console.log(err)
        
        if(err.status === 401){
          
          //call logout
          this.authService.logout()

        }

        return throwError(err)
      })
    )
  }

  authorization(request : HttpRequest<any>){
    const token = this.authService.getAccessToken()
    if(token){
      return request.clone(
        {
          setHeaders : {'x-access-token' : token}
        }
      )
    }
    return request  
  }

}
