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

  refreshingAccessToken: boolean;

  intercept(request : HttpRequest<any>, next : HttpHandler){

    request = this.authorization(request)
    return next.handle(request).pipe(
      catchError((err : HttpErrorResponse)=>{
        
        if(err.status === 401 && !this.refreshingAccessToken){
          return this.refreshAccessToken().pipe(
            switchMap(()=>{
              request= this.authorization(request)
              return next.handle(request)
            }),
            catchError((er:any) => {
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
    this.refreshingAccessToken = true
    return this.authService.getNewAccessToken().pipe(
      tap(()=>{
        console.log("Access Token Refreshed")
        this.refreshingAccessToken = false
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
