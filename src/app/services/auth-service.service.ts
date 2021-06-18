import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { shareReplay, tap } from 'rxjs/operators'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private webrequest:WebRequestService, private router : Router, private http: HttpClient) { }

  authenticateLogin(email :string, password: string){
      return this.webrequest.login(email,password).pipe(
        shareReplay(),
        tap((res: HttpResponse<any>) => {
          // the auth tokens will be in the header of this response
          this.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));
        })
      )
  }

  authenticateSignin(email :string, password: string){
    return this.webrequest.signup(email,password).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => {
        // the auth tokens will be in the header of this response
        this.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));
      })
    )
}

  logout(){
    this.removeSession()

    this.router.navigateByUrl("/login")
  }

  getAccessToken(){
    return localStorage.getItem('AccessToken')
  }

  getRefreshToken() {
    return localStorage.getItem('RefreshToken');
  }

  getUserId() {
    return localStorage.getItem('user_id');
  }

  setAccessToken(accessToken: string) {
    localStorage.setItem('AccessToken', accessToken)
  }

  private setSession(user_id :string,accessToken  : string,  refreshToken: string){
    localStorage.setItem('user_id',user_id),
    localStorage.setItem('AccessToken',accessToken),
    localStorage.setItem('RefreshToken',refreshToken)
  }

  private removeSession(){
    localStorage.removeItem('user_id'),
    localStorage.removeItem('AccessToken'),
    localStorage.removeItem('RefreshToken')
  }


  getNewAccessToken(){
      return this.http.get(`${this.webrequest.ROOT_URL}/users/me/access-token`,{
        headers:{
          'x-refresh-token':this.getRefreshToken(),
          '_id':this.getUserId()
        },
        observe: 'response'
      }).pipe(
        tap((res : HttpResponse<any>) => {
          this.setAccessToken(res.headers.get('x-access-token'))
        })
      )
  }

}
