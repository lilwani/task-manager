import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { empty, throwError } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
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
        
        if(err.status === 401){
          return this.refreshAccessToken().pipe(
            switchMap(()=>{
              request= this.authorization(request)
              return next.handle(request)
            }),
            catchError((er:any) => {
              console.log(er);
              this.authService.logout();
              return empty()
            })
          //call logout
          )
        }
        return throwError(err)
      })
    )
  }



  refreshAccessToken(){
    return this.authService.getNewAccessToken().pipe(
      tap(()=>{
        console.log("Access Token Refreshed")
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
